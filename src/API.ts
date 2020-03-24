/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateGovGradCAMInput = {
  ds_art: string,
  image?: Array< string | null > | null,
};

export type ModelGovGradCAMConditionInput = {
  image?: ModelStringInput | null,
  and?: Array< ModelGovGradCAMConditionInput | null > | null,
  or?: Array< ModelGovGradCAMConditionInput | null > | null,
  not?: ModelGovGradCAMConditionInput | null,
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

export type UpdateGovGradCAMInput = {
  ds_art: string,
  image?: Array< string | null > | null,
};

export type DeleteGovGradCAMInput = {
  ds_art: string,
};

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

export type UpdateInvokabilitiesInput = {
  ds_split: string,
  version: string,
  scores?: string | null,
};

export type DeleteInvokabilitiesInput = {
  ds_split: string,
  version: string,
};

export type ModelGovGradCAMFilterInput = {
  ds_art?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelGovGradCAMFilterInput | null > | null,
  or?: Array< ModelGovGradCAMFilterInput | null > | null,
  not?: ModelGovGradCAMFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


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

export type CreateGovGradCamMutationVariables = {
  input: CreateGovGradCAMInput,
  condition?: ModelGovGradCAMConditionInput | null,
};

export type CreateGovGradCamMutation = {
  createGovGradCAM:  {
    __typename: "GovGradCAM",
    ds_art: string,
    image: Array< string | null > | null,
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
    image: Array< string | null > | null,
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
    image: Array< string | null > | null,
  } | null,
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

export type GetGovGradCamQueryVariables = {
  ds_art: string,
};

export type GetGovGradCamQuery = {
  getGovGradCAM:  {
    __typename: "GovGradCAM",
    ds_art: string,
    image: Array< string | null > | null,
  } | null,
};

export type ListGovGradCaMsQueryVariables = {
  ds_art?: string | null,
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
      image: Array< string | null > | null,
    } | null > | null,
    nextToken: string | null,
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

export type OnCreateGovGradCamSubscription = {
  onCreateGovGradCAM:  {
    __typename: "GovGradCAM",
    ds_art: string,
    image: Array< string | null > | null,
  } | null,
};

export type OnUpdateGovGradCamSubscription = {
  onUpdateGovGradCAM:  {
    __typename: "GovGradCAM",
    ds_art: string,
    image: Array< string | null > | null,
  } | null,
};

export type OnDeleteGovGradCamSubscription = {
  onDeleteGovGradCAM:  {
    __typename: "GovGradCAM",
    ds_art: string,
    image: Array< string | null > | null,
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
