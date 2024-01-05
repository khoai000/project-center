import { Entity, ManyToOne, OneToOne, Property, types } from '@mikro-orm/core';
import { EntityBase } from '../entity-base';

@Entity({
  tableName: 'orders',
})
export class OrdersEntity extends EntityBase {
  @Property({ type: types.string })
  code!: string;

  @Property({ type: types.string })
  name!: string;

  @Property({ type: types.bigint, nullable: true, default: 0 })
  quantity!: number;

  @Property({ type: types.bigint, nullable: true, default: 0 })
  unitPrice?: number;
}
