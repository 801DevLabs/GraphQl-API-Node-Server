// Code generated by Prisma (prisma@1.29.1). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  apartment: (where?: ApartmentWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  apartment: (where: ApartmentWhereUniqueInput) => ApartmentPromise;
  apartments: (
    args?: {
      where?: ApartmentWhereInput;
      orderBy?: ApartmentOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<Apartment>;
  apartmentsConnection: (
    args?: {
      where?: ApartmentWhereInput;
      orderBy?: ApartmentOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => ApartmentConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserPromise;
  users: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<User>;
  usersConnection: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createApartment: (data: ApartmentCreateInput) => ApartmentPromise;
  updateApartment: (
    args: { data: ApartmentUpdateInput; where: ApartmentWhereUniqueInput }
  ) => ApartmentPromise;
  updateManyApartments: (
    args: {
      data: ApartmentUpdateManyMutationInput;
      where?: ApartmentWhereInput;
    }
  ) => BatchPayloadPromise;
  upsertApartment: (
    args: {
      where: ApartmentWhereUniqueInput;
      create: ApartmentCreateInput;
      update: ApartmentUpdateInput;
    }
  ) => ApartmentPromise;
  deleteApartment: (where: ApartmentWhereUniqueInput) => ApartmentPromise;
  deleteManyApartments: (where?: ApartmentWhereInput) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (
    args: { data: UserUpdateInput; where: UserWhereUniqueInput }
  ) => UserPromise;
  updateManyUsers: (
    args: { data: UserUpdateManyMutationInput; where?: UserWhereInput }
  ) => BatchPayloadPromise;
  upsertUser: (
    args: {
      where: UserWhereUniqueInput;
      create: UserCreateInput;
      update: UserUpdateInput;
    }
  ) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  apartment: (
    where?: ApartmentSubscriptionWhereInput
  ) => ApartmentSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type ApartmentOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "city_ASC"
  | "city_DESC"
  | "address_ASC"
  | "address_DESC"
  | "phone_ASC"
  | "phone_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface UserCreateInput {
  name: String;
}

export type ApartmentWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface ApartmentUpdateInput {
  name?: String;
  city?: String;
  address?: String;
  phone?: String;
}

export interface ApartmentSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: ApartmentWhereInput;
  AND?: ApartmentSubscriptionWhereInput[] | ApartmentSubscriptionWhereInput;
  OR?: ApartmentSubscriptionWhereInput[] | ApartmentSubscriptionWhereInput;
  NOT?: ApartmentSubscriptionWhereInput[] | ApartmentSubscriptionWhereInput;
}

export interface ApartmentWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  city?: String;
  city_not?: String;
  city_in?: String[] | String;
  city_not_in?: String[] | String;
  city_lt?: String;
  city_lte?: String;
  city_gt?: String;
  city_gte?: String;
  city_contains?: String;
  city_not_contains?: String;
  city_starts_with?: String;
  city_not_starts_with?: String;
  city_ends_with?: String;
  city_not_ends_with?: String;
  address?: String;
  address_not?: String;
  address_in?: String[] | String;
  address_not_in?: String[] | String;
  address_lt?: String;
  address_lte?: String;
  address_gt?: String;
  address_gte?: String;
  address_contains?: String;
  address_not_contains?: String;
  address_starts_with?: String;
  address_not_starts_with?: String;
  address_ends_with?: String;
  address_not_ends_with?: String;
  phone?: String;
  phone_not?: String;
  phone_in?: String[] | String;
  phone_not_in?: String[] | String;
  phone_lt?: String;
  phone_lte?: String;
  phone_gt?: String;
  phone_gte?: String;
  phone_contains?: String;
  phone_not_contains?: String;
  phone_starts_with?: String;
  phone_not_starts_with?: String;
  phone_ends_with?: String;
  phone_not_ends_with?: String;
  AND?: ApartmentWhereInput[] | ApartmentWhereInput;
  OR?: ApartmentWhereInput[] | ApartmentWhereInput;
  NOT?: ApartmentWhereInput[] | ApartmentWhereInput;
}

export interface UserWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  AND?: UserWhereInput[] | UserWhereInput;
  OR?: UserWhereInput[] | UserWhereInput;
  NOT?: UserWhereInput[] | UserWhereInput;
}

export interface ApartmentCreateInput {
  name: String;
  city: String;
  address?: String;
  phone?: String;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface UserUpdateManyMutationInput {
  name?: String;
}

export interface ApartmentUpdateManyMutationInput {
  name?: String;
  city?: String;
  address?: String;
  phone?: String;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: UserWhereInput;
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
}

export interface UserUpdateInput {
  name?: String;
}

export interface NodeNode {
  id: ID_Output;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface UserPreviousValues {
  id: ID_Output;
  name: String;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
}

export interface ApartmentConnection {
  pageInfo: PageInfo;
  edges: ApartmentEdge[];
}

export interface ApartmentConnectionPromise
  extends Promise<ApartmentConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<ApartmentEdge>>() => T;
  aggregate: <T = AggregateApartmentPromise>() => T;
}

export interface ApartmentConnectionSubscription
  extends Promise<AsyncIterator<ApartmentConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<ApartmentEdgeSubscription>>>() => T;
  aggregate: <T = AggregateApartmentSubscription>() => T;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface ApartmentSubscriptionPayload {
  mutation: MutationType;
  node: Apartment;
  updatedFields: String[];
  previousValues: ApartmentPreviousValues;
}

export interface ApartmentSubscriptionPayloadPromise
  extends Promise<ApartmentSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = ApartmentPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = ApartmentPreviousValuesPromise>() => T;
}

export interface ApartmentSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<ApartmentSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = ApartmentSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = ApartmentPreviousValuesSubscription>() => T;
}

export interface ApartmentPreviousValues {
  id: ID_Output;
  name: String;
  city: String;
  address?: String;
  phone?: String;
}

export interface ApartmentPreviousValuesPromise
  extends Promise<ApartmentPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  city: () => Promise<String>;
  address: () => Promise<String>;
  phone: () => Promise<String>;
}

export interface ApartmentPreviousValuesSubscription
  extends Promise<AsyncIterator<ApartmentPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  city: () => Promise<AsyncIterator<String>>;
  address: () => Promise<AsyncIterator<String>>;
  phone: () => Promise<AsyncIterator<String>>;
}

export interface ApartmentEdge {
  node: Apartment;
  cursor: String;
}

export interface ApartmentEdgePromise
  extends Promise<ApartmentEdge>,
    Fragmentable {
  node: <T = ApartmentPromise>() => T;
  cursor: () => Promise<String>;
}

export interface ApartmentEdgeSubscription
  extends Promise<AsyncIterator<ApartmentEdge>>,
    Fragmentable {
  node: <T = ApartmentSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface User {
  id: ID_Output;
  name: String;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface Apartment {
  id: ID_Output;
  name: String;
  city: String;
  address?: String;
  phone?: String;
}

export interface ApartmentPromise extends Promise<Apartment>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  city: () => Promise<String>;
  address: () => Promise<String>;
  phone: () => Promise<String>;
}

export interface ApartmentSubscription
  extends Promise<AsyncIterator<Apartment>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  city: () => Promise<AsyncIterator<String>>;
  address: () => Promise<AsyncIterator<String>>;
  phone: () => Promise<AsyncIterator<String>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface AggregateApartment {
  count: Int;
}

export interface AggregateApartmentPromise
  extends Promise<AggregateApartment>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateApartmentSubscription
  extends Promise<AsyncIterator<AggregateApartment>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

export type Long = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Apartment",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
