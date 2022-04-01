import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'

import { DataModule } from '../core/data.module'

import { UserModule } from '../user/user.module'
import { DaysModule } from '../days/days.module'
import { EventsModule } from '../events/events.module'
import { StaffsModule } from '../staffs/staffs.module'
import { WorkspacesModule } from '../workspaces/workspaces.module'

import { GraphQLConfigService } from '../graphql/graphql.service'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'

@Module({
  imports: [
    UserModule,
    EventsModule,
    DaysModule,
    StaffsModule,
    WorkspacesModule,

    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      imports: [DataModule, UserModule],
      driver: ApolloDriver,
      useClass: GraphQLConfigService,
    }),
  ],
})
export class AppModule {}
