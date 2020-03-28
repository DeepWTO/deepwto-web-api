/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateInvokabilitiesInput = {
  ds_split: string,
  version: string,
  scores: string,
};

export type ModelInvokabilitiesConditionInput = {
  scores?: ModelStringInput | null,
  and?: Array< ModelInvokabilitiesConditionInput | null > | null,
  or?: Array< ModelInvokabilitiesConditionInput | null > | null,
  not?: ModelInvokabilitiesConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateInvokabilitiesInput = {
  ds_split: string,
  version: string,
  scores?: string | null,
};

export type DeleteInvokabilitiesInput = {
  ds_split: string,
  version: string,
};

export type CreateGovTokenizedInput = {
  ds: number,
  version: string,
  tokens: Array< string | null >,
};

export type ModelGovTokenizedConditionInput = {
  tokens?: ModelStringInput | null,
  and?: Array< ModelGovTokenizedConditionInput | null > | null,
  or?: Array< ModelGovTokenizedConditionInput | null > | null,
  not?: ModelGovTokenizedConditionInput | null,
};

export type UpdateGovTokenizedInput = {
  ds: number,
  version: string,
  tokens?: Array< string | null > | null,
};

export type DeleteGovTokenizedInput = {
  ds: number,
  version: string,
};

export type CreateGovGradCAMInput = {
  ds_art: string,
  version: string,
  weights: Array< number | null >,
};

export type ModelGovGradCAMConditionInput = {
  weights?: ModelFloatInput | null,
  and?: Array< ModelGovGradCAMConditionInput | null > | null,
  or?: Array< ModelGovGradCAMConditionInput | null > | null,
  not?: ModelGovGradCAMConditionInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateGovGradCAMInput = {
  ds_art: string,
  version: string,
  weights?: Array< number | null > | null,
};

export type DeleteGovGradCAMInput = {
  ds_art: string,
  version: string,
};

export type CreateArticleTokenizedInput = {
  article: string,
  version: string,
  tokens: Array< string | null >,
};

export type ModelArticleTokenizedConditionInput = {
  tokens?: ModelStringInput | null,
  and?: Array< ModelArticleTokenizedConditionInput | null > | null,
  or?: Array< ModelArticleTokenizedConditionInput | null > | null,
  not?: ModelArticleTokenizedConditionInput | null,
};

export type UpdateArticleTokenizedInput = {
  article: string,
  version: string,
  tokens?: Array< string | null > | null,
};

export type DeleteArticleTokenizedInput = {
  article: string,
  version: string,
};

export type CreateArticleGradCAMInput = {
  ds_art: string,
  version: string,
  weights: Array< number | null >,
};

export type ModelArticleGradCAMConditionInput = {
  weights?: ModelFloatInput | null,
  and?: Array< ModelArticleGradCAMConditionInput | null > | null,
  or?: Array< ModelArticleGradCAMConditionInput | null > | null,
  not?: ModelArticleGradCAMConditionInput | null,
};

export type UpdateArticleGradCAMInput = {
  ds_art: string,
  version: string,
  weights?: Array< number | null > | null,
};

export type DeleteArticleGradCAMInput = {
  ds_art: string,
  version: string,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelInvokabilitiesFilterInput = {
  ds_split?: ModelStringInput | null,
  version?: ModelStringInput | null,
  scores?: ModelStringInput | null,
  and?: Array< ModelInvokabilitiesFilterInput | null > | null,
  or?: Array< ModelInvokabilitiesFilterInput | null > | null,
  not?: ModelInvokabilitiesFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelGovTokenizedFilterInput = {
  ds?: ModelIntInput | null,
  version?: ModelStringInput | null,
  tokens?: ModelStringInput | null,
  and?: Array< ModelGovTokenizedFilterInput | null > | null,
  or?: Array< ModelGovTokenizedFilterInput | null > | null,
  not?: ModelGovTokenizedFilterInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelGovGradCAMFilterInput = {
  ds_art?: ModelStringInput | null,
  version?: ModelStringInput | null,
  weights?: ModelFloatInput | null,
  and?: Array< ModelGovGradCAMFilterInput | null > | null,
  or?: Array< ModelGovGradCAMFilterInput | null > | null,
  not?: ModelGovGradCAMFilterInput | null,
};

export type ModelArticleTokenizedFilterInput = {
  article?: ModelStringInput | null,
  version?: ModelStringInput | null,
  tokens?: ModelStringInput | null,
  and?: Array< ModelArticleTokenizedFilterInput | null > | null,
  or?: Array< ModelArticleTokenizedFilterInput | null > | null,
  not?: ModelArticleTokenizedFilterInput | null,
};

export type ModelArticleGradCAMFilterInput = {
  ds_art?: ModelStringInput | null,
  version?: ModelStringInput | null,
  weights?: ModelFloatInput | null,
  and?: Array< ModelArticleGradCAMFilterInput | null > | null,
  or?: Array< ModelArticleGradCAMFilterInput | null > | null,
  not?: ModelArticleGradCAMFilterInput | null,
};

export type CreateInvokabilitiesMutationVariables = {
  input: CreateInvokabilitiesInput,
  condition?: ModelInvokabilitiesConditionInput | null,
};

export type CreateInvokabilitiesMutation = {
  createInvokabilities:  {
    __typename: "Invokabilities",
    ds_split: string,
    version: string,
    scores: string,
  } | null,
};

export type UpdateInvokabilitiesMutationVariables = {
  input: UpdateInvokabilitiesInput,
  condition?: ModelInvokabilitiesConditionInput | null,
};

export type UpdateInvokabilitiesMutation = {
  updateInvokabilities:  {
    __typename: "Invokabilities",
    ds_split: string,
    version: string,
    scores: string,
  } | null,
};

export type DeleteInvokabilitiesMutationVariables = {
  input: DeleteInvokabilitiesInput,
  condition?: ModelInvokabilitiesConditionInput | null,
};

export type DeleteInvokabilitiesMutation = {
  deleteInvokabilities:  {
    __typename: "Invokabilities",
    ds_split: string,
    version: string,
    scores: string,
  } | null,
};

export type CreateGovTokenizedMutationVariables = {
  input: CreateGovTokenizedInput,
  condition?: ModelGovTokenizedConditionInput | null,
};

export type CreateGovTokenizedMutation = {
  createGovTokenized:  {
    __typename: "GovTokenized",
    ds: number,
    version: string,
    tokens: Array< string | null >,
  } | null,
};

export type UpdateGovTokenizedMutationVariables = {
  input: UpdateGovTokenizedInput,
  condition?: ModelGovTokenizedConditionInput | null,
};

export type UpdateGovTokenizedMutation = {
  updateGovTokenized:  {
    __typename: "GovTokenized",
    ds: number,
    version: string,
    tokens: Array< string | null >,
  } | null,
};

export type DeleteGovTokenizedMutationVariables = {
  input: DeleteGovTokenizedInput,
  condition?: ModelGovTokenizedConditionInput | null,
};

export type DeleteGovTokenizedMutation = {
  deleteGovTokenized:  {
    __typename: "GovTokenized",
    ds: number,
    version: string,
    tokens: Array< string | null >,
  } | null,
};

export type CreateGovGradCamMutationVariables = {
  input: CreateGovGradCAMInput,
  condition?: ModelGovGradCAMConditionInput | null,
};

export type CreateGovGradCamMutation = {
  createGovGradCAM:  {
    __typename: "GovGradCAM",
    ds_art: string,
    version: string,
    weights: Array< number | null >,
  } | null,
};

export type UpdateGovGradCamMutationVariables = {
  input: UpdateGovGradCAMInput,
  condition?: ModelGovGradCAMConditionInput | null,
};

export type UpdateGovGradCamMutation = {
  updateGovGradCAM:  {
    __typename: "GovGradCAM",
    ds_art: string,
    version: string,
    weights: Array< number | null >,
  } | null,
};

export type DeleteGovGradCamMutationVariables = {
  input: DeleteGovGradCAMInput,
  condition?: ModelGovGradCAMConditionInput | null,
};

export type DeleteGovGradCamMutation = {
  deleteGovGradCAM:  {
    __typename: "GovGradCAM",
    ds_art: string,
    version: string,
    weights: Array< number | null >,
  } | null,
};

export type CreateArticleTokenizedMutationVariables = {
  input: CreateArticleTokenizedInput,
  condition?: ModelArticleTokenizedConditionInput | null,
};

export type CreateArticleTokenizedMutation = {
  createArticleTokenized:  {
    __typename: "ArticleTokenized",
    article: string,
    version: string,
    tokens: Array< string | null >,
  } | null,
};

export type UpdateArticleTokenizedMutationVariables = {
  input: UpdateArticleTokenizedInput,
  condition?: ModelArticleTokenizedConditionInput | null,
};

export type UpdateArticleTokenizedMutation = {
  updateArticleTokenized:  {
    __typename: "ArticleTokenized",
    article: string,
    version: string,
    tokens: Array< string | null >,
  } | null,
};

export type DeleteArticleTokenizedMutationVariables = {
  input: DeleteArticleTokenizedInput,
  condition?: ModelArticleTokenizedConditionInput | null,
};

export type DeleteArticleTokenizedMutation = {
  deleteArticleTokenized:  {
    __typename: "ArticleTokenized",
    article: string,
    version: string,
    tokens: Array< string | null >,
  } | null,
};

export type CreateArticleGradCamMutationVariables = {
  input: CreateArticleGradCAMInput,
  condition?: ModelArticleGradCAMConditionInput | null,
};

export type CreateArticleGradCamMutation = {
  createArticleGradCAM:  {
    __typename: "ArticleGradCAM",
    ds_art: string,
    version: string,
    weights: Array< number | null >,
  } | null,
};

export type UpdateArticleGradCamMutationVariables = {
  input: UpdateArticleGradCAMInput,
  condition?: ModelArticleGradCAMConditionInput | null,
};

export type UpdateArticleGradCamMutation = {
  updateArticleGradCAM:  {
    __typename: "ArticleGradCAM",
    ds_art: string,
    version: string,
    weights: Array< number | null >,
  } | null,
};

export type DeleteArticleGradCamMutationVariables = {
  input: DeleteArticleGradCAMInput,
  condition?: ModelArticleGradCAMConditionInput | null,
};

export type DeleteArticleGradCamMutation = {
  deleteArticleGradCAM:  {
    __typename: "ArticleGradCAM",
    ds_art: string,
    version: string,
    weights: Array< number | null >,
  } | null,
};

export type GetInvokabilitiesQueryVariables = {
  ds_split: string,
  version: string,
};

export type GetInvokabilitiesQuery = {
  getInvokabilities:  {
    __typename: "Invokabilities",
    ds_split: string,
    version: string,
    scores: string,
  } | null,
};

export type ListInvokabilitiessQueryVariables = {
  ds_split?: string | null,
  version?: ModelStringKeyConditionInput | null,
  filter?: ModelInvokabilitiesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListInvokabilitiessQuery = {
  listInvokabilitiess:  {
    __typename: "ModelInvokabilitiesConnection",
    items:  Array< {
      __typename: "Invokabilities",
      ds_split: string,
      version: string,
      scores: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetGovTokenizedQueryVariables = {
  ds: number,
  version: string,
};

export type GetGovTokenizedQuery = {
  getGovTokenized:  {
    __typename: "GovTokenized",
    ds: number,
    version: string,
    tokens: Array< string | null >,
  } | null,
};

export type ListGovTokenizedsQueryVariables = {
  ds?: number | null,
  version?: ModelStringKeyConditionInput | null,
  filter?: ModelGovTokenizedFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListGovTokenizedsQuery = {
  listGovTokenizeds:  {
    __typename: "ModelGovTokenizedConnection",
    items:  Array< {
      __typename: "GovTokenized",
      ds: number,
      version: string,
      tokens: Array< string | null >,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetGovGradCamQueryVariables = {
  ds_art: string,
  version: string,
};

export type GetGovGradCamQuery = {
  getGovGradCAM:  {
    __typename: "GovGradCAM",
    ds_art: string,
    version: string,
    weights: Array< number | null >,
  } | null,
};

export type ListGovGradCaMsQueryVariables = {
  ds_art?: string | null,
  version?: ModelStringKeyConditionInput | null,
  filter?: ModelGovGradCAMFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListGovGradCaMsQuery = {
  listGovGradCAMs:  {
    __typename: "ModelGovGradCAMConnection",
    items:  Array< {
      __typename: "GovGradCAM",
      ds_art: string,
      version: string,
      weights: Array< number | null >,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetArticleTokenizedQueryVariables = {
  article: string,
  version: string,
};

export type GetArticleTokenizedQuery = {
  getArticleTokenized:  {
    __typename: "ArticleTokenized",
    article: string,
    version: string,
    tokens: Array< string | null >,
  } | null,
};

export type ListArticleTokenizedsQueryVariables = {
  article?: string | null,
  version?: ModelStringKeyConditionInput | null,
  filter?: ModelArticleTokenizedFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListArticleTokenizedsQuery = {
  listArticleTokenizeds:  {
    __typename: "ModelArticleTokenizedConnection",
    items:  Array< {
      __typename: "ArticleTokenized",
      article: string,
      version: string,
      tokens: Array< string | null >,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetArticleGradCamQueryVariables = {
  ds_art: string,
  version: string,
};

export type GetArticleGradCamQuery = {
  getArticleGradCAM:  {
    __typename: "ArticleGradCAM",
    ds_art: string,
    version: string,
    weights: Array< number | null >,
  } | null,
};

export type ListArticleGradCaMsQueryVariables = {
  ds_art?: string | null,
  version?: ModelStringKeyConditionInput | null,
  filter?: ModelArticleGradCAMFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListArticleGradCaMsQuery = {
  listArticleGradCAMs:  {
    __typename: "ModelArticleGradCAMConnection",
    items:  Array< {
      __typename: "ArticleGradCAM",
      ds_art: string,
      version: string,
      weights: Array< number | null >,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateInvokabilitiesSubscription = {
  onCreateInvokabilities:  {
    __typename: "Invokabilities",
    ds_split: string,
    version: string,
    scores: string,
  } | null,
};

export type OnUpdateInvokabilitiesSubscription = {
  onUpdateInvokabilities:  {
    __typename: "Invokabilities",
    ds_split: string,
    version: string,
    scores: string,
  } | null,
};

export type OnDeleteInvokabilitiesSubscription = {
  onDeleteInvokabilities:  {
    __typename: "Invokabilities",
    ds_split: string,
    version: string,
    scores: string,
  } | null,
};

export type OnCreateGovTokenizedSubscription = {
  onCreateGovTokenized:  {
    __typename: "GovTokenized",
    ds: number,
    version: string,
    tokens: Array< string | null >,
  } | null,
};

export type OnUpdateGovTokenizedSubscription = {
  onUpdateGovTokenized:  {
    __typename: "GovTokenized",
    ds: number,
    version: string,
    tokens: Array< string | null >,
  } | null,
};

export type OnDeleteGovTokenizedSubscription = {
  onDeleteGovTokenized:  {
    __typename: "GovTokenized",
    ds: number,
    version: string,
    tokens: Array< string | null >,
  } | null,
};

export type OnCreateGovGradCamSubscription = {
  onCreateGovGradCAM:  {
    __typename: "GovGradCAM",
    ds_art: string,
    version: string,
    weights: Array< number | null >,
  } | null,
};

export type OnUpdateGovGradCamSubscription = {
  onUpdateGovGradCAM:  {
    __typename: "GovGradCAM",
    ds_art: string,
    version: string,
    weights: Array< number | null >,
  } | null,
};

export type OnDeleteGovGradCamSubscription = {
  onDeleteGovGradCAM:  {
    __typename: "GovGradCAM",
    ds_art: string,
    version: string,
    weights: Array< number | null >,
  } | null,
};

export type OnCreateArticleTokenizedSubscription = {
  onCreateArticleTokenized:  {
    __typename: "ArticleTokenized",
    article: string,
    version: string,
    tokens: Array< string | null >,
  } | null,
};

export type OnUpdateArticleTokenizedSubscription = {
  onUpdateArticleTokenized:  {
    __typename: "ArticleTokenized",
    article: string,
    version: string,
    tokens: Array< string | null >,
  } | null,
};

export type OnDeleteArticleTokenizedSubscription = {
  onDeleteArticleTokenized:  {
    __typename: "ArticleTokenized",
    article: string,
    version: string,
    tokens: Array< string | null >,
  } | null,
};

export type OnCreateArticleGradCamSubscription = {
  onCreateArticleGradCAM:  {
    __typename: "ArticleGradCAM",
    ds_art: string,
    version: string,
    weights: Array< number | null >,
  } | null,
};

export type OnUpdateArticleGradCamSubscription = {
  onUpdateArticleGradCAM:  {
    __typename: "ArticleGradCAM",
    ds_art: string,
    version: string,
    weights: Array< number | null >,
  } | null,
};

export type OnDeleteArticleGradCamSubscription = {
  onDeleteArticleGradCAM:  {
    __typename: "ArticleGradCAM",
    ds_art: string,
    version: string,
    weights: Array< number | null >,
  } | null,
};
