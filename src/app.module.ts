import { Module } from '@nestjs/common';
import { VenuesModule } from './venues/venues.module';
import { TasksModule } from './tasks/tasks.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [VenuesModule, TasksModule, AuthModule, PrismaModule],
})
export class AppModule {}
