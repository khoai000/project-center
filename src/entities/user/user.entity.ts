import { Entity, ManyToOne, OneToOne, Property, types } from '@mikro-orm/core';
import { EntityBase } from '../entity-base';

@Entity({
  tableName: 'users',
})
export class UserEntity extends EntityBase {
  @Property({ type: types.string, nullable: true })
  code?: string;

  @Property({ type: types.string, nullable: true })
  fullName?: string;

  @Property({ type: types.string, nullable: true })
  loginName?: string;

  @Property({ type: types.string, nullable: true })
  workEmail?: string;
}
