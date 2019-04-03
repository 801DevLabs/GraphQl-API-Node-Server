/**
 * This file was automatically generated by Nexus 0.11.6
 * Do not make changes to this file directly
 */




declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  ApartmentCreateInput: { // input type
    address?: string | null; // String
    city: string; // String!
    name: string; // String!
    phone?: string | null; // String
  }
  ApartmentUpdateInput: { // input type
    address?: string | null; // String
    city?: string | null; // String
    name?: string | null; // String
    phone?: string | null; // String
  }
  ApartmentUpdateManyMutationInput: { // input type
    address?: string | null; // String
    city?: string | null; // String
    name?: string | null; // String
    phone?: string | null; // String
  }
  ApartmentWhereInput: { // input type
    address?: string | null; // String
    address_contains?: string | null; // String
    address_ends_with?: string | null; // String
    address_gt?: string | null; // String
    address_gte?: string | null; // String
    address_in?: string[] | null; // [String!]
    address_lt?: string | null; // String
    address_lte?: string | null; // String
    address_not?: string | null; // String
    address_not_contains?: string | null; // String
    address_not_ends_with?: string | null; // String
    address_not_in?: string[] | null; // [String!]
    address_not_starts_with?: string | null; // String
    address_starts_with?: string | null; // String
    AND?: NexusGenInputs['ApartmentWhereInput'][] | null; // [ApartmentWhereInput!]
    city?: string | null; // String
    city_contains?: string | null; // String
    city_ends_with?: string | null; // String
    city_gt?: string | null; // String
    city_gte?: string | null; // String
    city_in?: string[] | null; // [String!]
    city_lt?: string | null; // String
    city_lte?: string | null; // String
    city_not?: string | null; // String
    city_not_contains?: string | null; // String
    city_not_ends_with?: string | null; // String
    city_not_in?: string[] | null; // [String!]
    city_not_starts_with?: string | null; // String
    city_starts_with?: string | null; // String
    id?: string | null; // ID
    id_contains?: string | null; // ID
    id_ends_with?: string | null; // ID
    id_gt?: string | null; // ID
    id_gte?: string | null; // ID
    id_in?: string[] | null; // [ID!]
    id_lt?: string | null; // ID
    id_lte?: string | null; // ID
    id_not?: string | null; // ID
    id_not_contains?: string | null; // ID
    id_not_ends_with?: string | null; // ID
    id_not_in?: string[] | null; // [ID!]
    id_not_starts_with?: string | null; // ID
    id_starts_with?: string | null; // ID
    name?: string | null; // String
    name_contains?: string | null; // String
    name_ends_with?: string | null; // String
    name_gt?: string | null; // String
    name_gte?: string | null; // String
    name_in?: string[] | null; // [String!]
    name_lt?: string | null; // String
    name_lte?: string | null; // String
    name_not?: string | null; // String
    name_not_contains?: string | null; // String
    name_not_ends_with?: string | null; // String
    name_not_in?: string[] | null; // [String!]
    name_not_starts_with?: string | null; // String
    name_starts_with?: string | null; // String
    NOT?: NexusGenInputs['ApartmentWhereInput'][] | null; // [ApartmentWhereInput!]
    OR?: NexusGenInputs['ApartmentWhereInput'][] | null; // [ApartmentWhereInput!]
    phone?: string | null; // String
    phone_contains?: string | null; // String
    phone_ends_with?: string | null; // String
    phone_gt?: string | null; // String
    phone_gte?: string | null; // String
    phone_in?: string[] | null; // [String!]
    phone_lt?: string | null; // String
    phone_lte?: string | null; // String
    phone_not?: string | null; // String
    phone_not_contains?: string | null; // String
    phone_not_ends_with?: string | null; // String
    phone_not_in?: string[] | null; // [String!]
    phone_not_starts_with?: string | null; // String
    phone_starts_with?: string | null; // String
  }
  ApartmentWhereUniqueInput: { // input type
    id?: string | null; // ID
  }
  UserCreateInput: { // input type
    name: string; // String!
  }
  UserUpdateInput: { // input type
    name?: string | null; // String
  }
  UserUpdateManyMutationInput: { // input type
    name?: string | null; // String
  }
  UserWhereInput: { // input type
    AND?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
    id?: string | null; // ID
    id_contains?: string | null; // ID
    id_ends_with?: string | null; // ID
    id_gt?: string | null; // ID
    id_gte?: string | null; // ID
    id_in?: string[] | null; // [ID!]
    id_lt?: string | null; // ID
    id_lte?: string | null; // ID
    id_not?: string | null; // ID
    id_not_contains?: string | null; // ID
    id_not_ends_with?: string | null; // ID
    id_not_in?: string[] | null; // [ID!]
    id_not_starts_with?: string | null; // ID
    id_starts_with?: string | null; // ID
    name?: string | null; // String
    name_contains?: string | null; // String
    name_ends_with?: string | null; // String
    name_gt?: string | null; // String
    name_gte?: string | null; // String
    name_in?: string[] | null; // [String!]
    name_lt?: string | null; // String
    name_lte?: string | null; // String
    name_not?: string | null; // String
    name_not_contains?: string | null; // String
    name_not_ends_with?: string | null; // String
    name_not_in?: string[] | null; // [String!]
    name_not_starts_with?: string | null; // String
    name_starts_with?: string | null; // String
    NOT?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
    OR?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
  }
  UserWhereUniqueInput: { // input type
    id?: string | null; // ID
  }
}

export interface NexusGenEnums {
  ApartmentOrderByInput: "address_ASC" | "address_DESC" | "city_ASC" | "city_DESC" | "createdAt_ASC" | "createdAt_DESC" | "id_ASC" | "id_DESC" | "name_ASC" | "name_DESC" | "phone_ASC" | "phone_DESC" | "updatedAt_ASC" | "updatedAt_DESC"
  UserOrderByInput: "createdAt_ASC" | "createdAt_DESC" | "id_ASC" | "id_DESC" | "name_ASC" | "name_DESC" | "updatedAt_ASC" | "updatedAt_DESC"
}

export interface NexusGenRootTypes {
  AggregateApartment: { // root type
    count: number; // Int!
  }
  AggregateUser: { // root type
    count: number; // Int!
  }
  Apartment: { // root type
    address?: string | null; // String
    city: string; // String!
    id: string; // ID!
    name: string; // String!
    phone?: string | null; // String
  }
  ApartmentConnection: { // root type
    edges: NexusGenRootTypes['ApartmentEdge'][]; // [ApartmentEdge!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  ApartmentEdge: { // root type
    cursor: string; // String!
    node: NexusGenRootTypes['Apartment']; // Apartment!
  }
  BatchPayload: { // root type
    count: any; // Long!
  }
  Mutation: {};
  PageInfo: { // root type
    endCursor?: string | null; // String
    hasNextPage: boolean; // Boolean!
    hasPreviousPage: boolean; // Boolean!
    startCursor?: string | null; // String
  }
  Query: {};
  User: { // root type
    id: string; // ID!
    name: string; // String!
  }
  UserConnection: { // root type
    edges: NexusGenRootTypes['UserEdge'][]; // [UserEdge!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  UserEdge: { // root type
    cursor: string; // String!
    node: NexusGenRootTypes['User']; // User!
  }
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
  Long: any;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  ApartmentCreateInput: NexusGenInputs['ApartmentCreateInput'];
  ApartmentUpdateInput: NexusGenInputs['ApartmentUpdateInput'];
  ApartmentUpdateManyMutationInput: NexusGenInputs['ApartmentUpdateManyMutationInput'];
  ApartmentWhereInput: NexusGenInputs['ApartmentWhereInput'];
  ApartmentWhereUniqueInput: NexusGenInputs['ApartmentWhereUniqueInput'];
  UserCreateInput: NexusGenInputs['UserCreateInput'];
  UserUpdateInput: NexusGenInputs['UserUpdateInput'];
  UserUpdateManyMutationInput: NexusGenInputs['UserUpdateManyMutationInput'];
  UserWhereInput: NexusGenInputs['UserWhereInput'];
  UserWhereUniqueInput: NexusGenInputs['UserWhereUniqueInput'];
  ApartmentOrderByInput: NexusGenEnums['ApartmentOrderByInput'];
  UserOrderByInput: NexusGenEnums['UserOrderByInput'];
}

export interface NexusGenFieldTypes {
  AggregateApartment: { // field return type
    count: number; // Int!
  }
  AggregateUser: { // field return type
    count: number; // Int!
  }
  Apartment: { // field return type
    address: string | null; // String
    city: string; // String!
    id: string; // ID!
    name: string; // String!
    phone: string | null; // String
  }
  ApartmentConnection: { // field return type
    aggregate: NexusGenRootTypes['AggregateApartment']; // AggregateApartment!
    edges: NexusGenRootTypes['ApartmentEdge'][]; // [ApartmentEdge!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  ApartmentEdge: { // field return type
    cursor: string; // String!
    node: NexusGenRootTypes['Apartment']; // Apartment!
  }
  BatchPayload: { // field return type
    count: any; // Long!
  }
  Mutation: { // field return type
    createApartment: NexusGenRootTypes['Apartment']; // Apartment!
    createUser: NexusGenRootTypes['User']; // User!
    deleteApartment: NexusGenRootTypes['Apartment'] | null; // Apartment
    deleteManyApartments: NexusGenRootTypes['BatchPayload']; // BatchPayload!
    deleteManyUsers: NexusGenRootTypes['BatchPayload']; // BatchPayload!
    deleteUser: NexusGenRootTypes['User'] | null; // User
    updateApartment: NexusGenRootTypes['Apartment'] | null; // Apartment
    updateManyApartments: NexusGenRootTypes['BatchPayload']; // BatchPayload!
    updateManyUsers: NexusGenRootTypes['BatchPayload']; // BatchPayload!
    updateUser: NexusGenRootTypes['User'] | null; // User
    upsertApartment: NexusGenRootTypes['Apartment']; // Apartment!
    upsertUser: NexusGenRootTypes['User']; // User!
  }
  PageInfo: { // field return type
    endCursor: string | null; // String
    hasNextPage: boolean; // Boolean!
    hasPreviousPage: boolean; // Boolean!
    startCursor: string | null; // String
  }
  Query: { // field return type
    apartment: NexusGenRootTypes['Apartment'] | null; // Apartment
    apartments: NexusGenRootTypes['Apartment'][]; // [Apartment!]!
    apartmentsConnection: NexusGenRootTypes['ApartmentConnection']; // ApartmentConnection!
    user: NexusGenRootTypes['User'] | null; // User
    users: NexusGenRootTypes['User'][]; // [User!]!
    usersConnection: NexusGenRootTypes['UserConnection']; // UserConnection!
  }
  User: { // field return type
    id: string; // ID!
    name: string; // String!
  }
  UserConnection: { // field return type
    aggregate: NexusGenRootTypes['AggregateUser']; // AggregateUser!
    edges: NexusGenRootTypes['UserEdge'][]; // [UserEdge!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  UserEdge: { // field return type
    cursor: string; // String!
    node: NexusGenRootTypes['User']; // User!
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createApartment: { // args
      data: NexusGenInputs['ApartmentCreateInput']; // ApartmentCreateInput!
    }
    createUser: { // args
      data: NexusGenInputs['UserCreateInput']; // UserCreateInput!
    }
    deleteApartment: { // args
      where: NexusGenInputs['ApartmentWhereUniqueInput']; // ApartmentWhereUniqueInput!
    }
    deleteManyApartments: { // args
      where?: NexusGenInputs['ApartmentWhereInput'] | null; // ApartmentWhereInput
    }
    deleteManyUsers: { // args
      where?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    }
    deleteUser: { // args
      where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
    }
    updateApartment: { // args
      data: NexusGenInputs['ApartmentUpdateInput']; // ApartmentUpdateInput!
      where: NexusGenInputs['ApartmentWhereUniqueInput']; // ApartmentWhereUniqueInput!
    }
    updateManyApartments: { // args
      data: NexusGenInputs['ApartmentUpdateManyMutationInput']; // ApartmentUpdateManyMutationInput!
      where?: NexusGenInputs['ApartmentWhereInput'] | null; // ApartmentWhereInput
    }
    updateManyUsers: { // args
      data: NexusGenInputs['UserUpdateManyMutationInput']; // UserUpdateManyMutationInput!
      where?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    }
    updateUser: { // args
      data: NexusGenInputs['UserUpdateInput']; // UserUpdateInput!
      where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
    }
    upsertApartment: { // args
      create: NexusGenInputs['ApartmentCreateInput']; // ApartmentCreateInput!
      update: NexusGenInputs['ApartmentUpdateInput']; // ApartmentUpdateInput!
      where: NexusGenInputs['ApartmentWhereUniqueInput']; // ApartmentWhereUniqueInput!
    }
    upsertUser: { // args
      create: NexusGenInputs['UserCreateInput']; // UserCreateInput!
      update: NexusGenInputs['UserUpdateInput']; // UserUpdateInput!
      where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
    }
  }
  Query: {
    apartment: { // args
      where: NexusGenInputs['ApartmentWhereUniqueInput']; // ApartmentWhereUniqueInput!
    }
    apartments: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['ApartmentOrderByInput'] | null; // ApartmentOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['ApartmentWhereInput'] | null; // ApartmentWhereInput
    }
    apartmentsConnection: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['ApartmentOrderByInput'] | null; // ApartmentOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['ApartmentWhereInput'] | null; // ApartmentWhereInput
    }
    user: { // args
      where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
    }
    users: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['UserOrderByInput'] | null; // UserOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    }
    usersConnection: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['UserOrderByInput'] | null; // UserOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "AggregateApartment" | "AggregateUser" | "Apartment" | "ApartmentConnection" | "ApartmentEdge" | "BatchPayload" | "Mutation" | "PageInfo" | "Query" | "User" | "UserConnection" | "UserEdge";

export type NexusGenInputNames = "ApartmentCreateInput" | "ApartmentUpdateInput" | "ApartmentUpdateManyMutationInput" | "ApartmentWhereInput" | "ApartmentWhereUniqueInput" | "UserCreateInput" | "UserUpdateInput" | "UserUpdateManyMutationInput" | "UserWhereInput" | "UserWhereUniqueInput";

export type NexusGenEnumNames = "ApartmentOrderByInput" | "UserOrderByInput";

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "Float" | "ID" | "Int" | "Long" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}