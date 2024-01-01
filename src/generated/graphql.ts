import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type Activity = {
  __typename?: 'Activity';
  activity: Scalars['String']['output'];
  endDate: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  mentorId: Scalars['Int']['output'];
  startDate: Scalars['DateTime']['output'];
  subscriptions?: Maybe<Array<Subscription>>;
  theme: Scalars['String']['output'];
};

export type CreateActivityDto = {
  activity: Scalars['String']['input'];
  endDate: Scalars['DateTime']['input'];
  mentorId: Scalars['Int']['input'];
  startDate: Scalars['DateTime']['input'];
  theme: Scalars['String']['input'];
};

export type CreateMentorDto = {
  /** Full name of the mentor */
  fullName: Scalars['String']['input'];
};

export type CreateSubscriptionDto = {
  activityId: Scalars['Int']['input'];
  userId: Scalars['Int']['input'];
};

export type CreateUserDto = {
  email: Scalars['String']['input'];
  fullName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  role: Scalars['String']['input'];
};

export type MentorType = {
  __typename?: 'MentorType';
  fullName: Scalars['String']['output'];
  id: Scalars['Int']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createActivity: Activity;
  createMentor: MentorType;
  createSubscription: Subscription;
  createUser: User;
  removeActivity: Scalars['Boolean']['output'];
  removeMentor: Scalars['Boolean']['output'];
  removeSubscription: Scalars['Boolean']['output'];
  updateActivity: Activity;
  updateMentor: MentorType;
};


export type MutationCreateActivityArgs = {
  createActivityDto: CreateActivityDto;
};


export type MutationCreateMentorArgs = {
  createMentorDto: CreateMentorDto;
};


export type MutationCreateSubscriptionArgs = {
  createSubscriptionDto: CreateSubscriptionDto;
};


export type MutationCreateUserArgs = {
  createUserDto: CreateUserDto;
};


export type MutationRemoveActivityArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveMentorArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveSubscriptionArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUpdateActivityArgs = {
  id: Scalars['Int']['input'];
  updateActivityDto: UpdateActivityDto;
};


export type MutationUpdateMentorArgs = {
  id: Scalars['Int']['input'];
  updateMentorDto: UpdateMentorDto;
};

export type Query = {
  __typename?: 'Query';
  activities: Array<Activity>;
  activity: Activity;
  hello: Scalars['String']['output'];
  mentor?: Maybe<MentorType>;
  mentors: Array<MentorType>;
  subscriptions: Array<Subscription>;
  user: User;
  userByEmail: User;
};


export type QueryActivityArgs = {
  id: Scalars['Int']['input'];
};


export type QueryMentorArgs = {
  id: Scalars['Int']['input'];
};


export type QueryUserArgs = {
  id: Scalars['Int']['input'];
};


export type QueryUserByEmailArgs = {
  email: Scalars['String']['input'];
};

export type Subscription = {
  __typename?: 'Subscription';
  activity: Activity;
  id: Scalars['ID']['output'];
  user: User;
};

export type UpdateActivityDto = {
  activity?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  mentorId?: InputMaybe<Scalars['Int']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  theme?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateMentorDto = {
  /** Full name of the mentor */
  fullName?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  fullName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  role: Scalars['String']['output'];
  subscriptions?: Maybe<Array<Maybe<Subscription>>>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Activity: ResolverTypeWrapper<Activity>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  CreateActivityDto: CreateActivityDto;
  CreateMentorDto: CreateMentorDto;
  CreateSubscriptionDto: CreateSubscriptionDto;
  CreateUserDto: CreateUserDto;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  MentorType: ResolverTypeWrapper<MentorType>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Subscription: ResolverTypeWrapper<Subscription>;
  UpdateActivityDto: UpdateActivityDto;
  UpdateMentorDto: UpdateMentorDto;
  User: ResolverTypeWrapper<User>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Activity: Activity;
  Boolean: Scalars['Boolean']['output'];
  CreateActivityDto: CreateActivityDto;
  CreateMentorDto: CreateMentorDto;
  CreateSubscriptionDto: CreateSubscriptionDto;
  CreateUserDto: CreateUserDto;
  DateTime: Scalars['DateTime']['output'];
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  MentorType: MentorType;
  Mutation: {};
  Query: {};
  String: Scalars['String']['output'];
  Subscription: Subscription;
  UpdateActivityDto: UpdateActivityDto;
  UpdateMentorDto: UpdateMentorDto;
  User: User;
};

export type ActivityResolvers<ContextType = any, ParentType extends ResolversParentTypes['Activity'] = ResolversParentTypes['Activity']> = {
  activity?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  endDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  mentorId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  startDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  subscriptions?: Resolver<Maybe<Array<ResolversTypes['Subscription']>>, ParentType, ContextType>;
  theme?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type MentorTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MentorType'] = ResolversParentTypes['MentorType']> = {
  fullName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createActivity?: Resolver<ResolversTypes['Activity'], ParentType, ContextType, RequireFields<MutationCreateActivityArgs, 'createActivityDto'>>;
  createMentor?: Resolver<ResolversTypes['MentorType'], ParentType, ContextType, RequireFields<MutationCreateMentorArgs, 'createMentorDto'>>;
  createSubscription?: Resolver<ResolversTypes['Subscription'], ParentType, ContextType, RequireFields<MutationCreateSubscriptionArgs, 'createSubscriptionDto'>>;
  createUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'createUserDto'>>;
  removeActivity?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationRemoveActivityArgs, 'id'>>;
  removeMentor?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationRemoveMentorArgs, 'id'>>;
  removeSubscription?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationRemoveSubscriptionArgs, 'id'>>;
  updateActivity?: Resolver<ResolversTypes['Activity'], ParentType, ContextType, RequireFields<MutationUpdateActivityArgs, 'id' | 'updateActivityDto'>>;
  updateMentor?: Resolver<ResolversTypes['MentorType'], ParentType, ContextType, RequireFields<MutationUpdateMentorArgs, 'id' | 'updateMentorDto'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  activities?: Resolver<Array<ResolversTypes['Activity']>, ParentType, ContextType>;
  activity?: Resolver<ResolversTypes['Activity'], ParentType, ContextType, RequireFields<QueryActivityArgs, 'id'>>;
  hello?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mentor?: Resolver<Maybe<ResolversTypes['MentorType']>, ParentType, ContextType, RequireFields<QueryMentorArgs, 'id'>>;
  mentors?: Resolver<Array<ResolversTypes['MentorType']>, ParentType, ContextType>;
  subscriptions?: Resolver<Array<ResolversTypes['Subscription']>, ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<QueryUserArgs, 'id'>>;
  userByEmail?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<QueryUserByEmailArgs, 'email'>>;
};

export type SubscriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = {
  activity?: Resolver<ResolversTypes['Activity'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fullName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  subscriptions?: Resolver<Maybe<Array<Maybe<ResolversTypes['Subscription']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Activity?: ActivityResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  MentorType?: MentorTypeResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};

