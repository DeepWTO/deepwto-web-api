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

export type CreateInvokabilityInput = {
  ds_art: string,
  ds: number,
  art: string,
  score: number,
};

export type ModelInvokabilityConditionInput = {
  art?: ModelStringInput | null,
  score?: ModelFloatInput | null,
  and?: Array< ModelInvokabilityConditionInput | null > | null,
  or?: Array< ModelInvokabilityConditionInput | null > | null,
  not?: ModelInvokabilityConditionInput | null,
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

export type UpdateInvokabilityInput = {
  ds_art: string,
  ds: number,
  art?: string | null,
  score?: number | null,
};

export type DeleteInvokabilityInput = {
  ds_art: string,
  ds: number,
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


export type ModelIntKeyConditionInput = {
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelInvokabilityFilterInput = {
  ds_art?: ModelStringInput | null,
  ds?: ModelIntInput | null,
  art?: ModelStringInput | null,
  score?: ModelFloatInput | null,
  and?: Array< ModelInvokabilityFilterInput | null > | null,
  or?: Array< ModelInvokabilityFilterInput | null > | null,
  not?: ModelInvokabilityFilterInput | null,
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

export type CreateInvokabilityMutationVariables = {
  input: CreateInvokabilityInput,
  condition?: ModelInvokabilityConditionInput | null,
};

export type CreateInvokabilityMutation = {
  createInvokability:  {
    __typename: "Invokability",
    ds_art: string,
    ds: number,
    art: string,
    score: number,
  } | null,
};

export type UpdateInvokabilityMutationVariables = {
  input: UpdateInvokabilityInput,
  condition?: ModelInvokabilityConditionInput | null,
};

export type UpdateInvokabilityMutation = {
  updateInvokability:  {
    __typename: "Invokability",
    ds_art: string,
    ds: number,
    art: string,
    score: number,
  } | null,
};

export type DeleteInvokabilityMutationVariables = {
  input: DeleteInvokabilityInput,
  condition?: ModelInvokabilityConditionInput | null,
};

export type DeleteInvokabilityMutation = {
  deleteInvokability:  {
    __typename: "Invokability",
    ds_art: string,
    ds: number,
    art: string,
    score: number,
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

export type GetInvokabilityQueryVariables = {
  ds_art: string,
  ds: number,
};

export type GetInvokabilityQuery = {
  getInvokability:  {
    __typename: "Invokability",
    ds_art: string,
    ds: number,
    art: string,
    score: number,
  } | null,
};

export type ListInvokabilitysQueryVariables = {
  ds_art?: string | null,
  ds?: ModelIntKeyConditionInput | null,
  filter?: ModelInvokabilityFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListInvokabilitysQuery = {
  listInvokabilitys:  {
    __typename: "ModelInvokabilityConnection",
    items:  Array< {
      __typename: "Invokability",
      ds_art: string,
      ds: number,
      art: string,
      score: number,
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

export type OnCreateInvokabilitySubscription = {
  onCreateInvokability:  {
    __typename: "Invokability",
    ds_art: string,
    ds: number,
    art: string,
    score: number,
  } | null,
};

export type OnUpdateInvokabilitySubscription = {
  onUpdateInvokability:  {
    __typename: "Invokability",
    ds_art: string,
    ds: number,
    art: string,
    score: number,
  } | null,
};

export type OnDeleteInvokabilitySubscription = {
  onDeleteInvokability:  {
    __typename: "Invokability",
    ds_art: string,
    ds: number,
    art: string,
    score: number,
  } | null,
};
