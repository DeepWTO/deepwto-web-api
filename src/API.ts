/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateGovGradCAMInput = {
  ds_art: string,
  image?: string | null,
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
  image?: string | null,
};

export type DeleteGovGradCAMInput = {
  ds_art: string,
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


export type CreateGovGradCamMutationVariables = {
  input: CreateGovGradCAMInput,
  condition?: ModelGovGradCAMConditionInput | null,
};

export type CreateGovGradCamMutation = {
  createGovGradCAM:  {
    __typename: "GovGradCAM",
    ds_art: string,
    image: string | null,
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
    image: string | null,
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
    image: string | null,
  } | null,
};

export type GetGovGradCamQueryVariables = {
  ds_art: string,
};

export type GetGovGradCamQuery = {
  getGovGradCAM:  {
    __typename: "GovGradCAM",
    ds_art: string,
    image: string | null,
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
      image: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateGovGradCamSubscription = {
  onCreateGovGradCAM:  {
    __typename: "GovGradCAM",
    ds_art: string,
    image: string | null,
  } | null,
};

export type OnUpdateGovGradCamSubscription = {
  onUpdateGovGradCAM:  {
    __typename: "GovGradCAM",
    ds_art: string,
    image: string | null,
  } | null,
};

export type OnDeleteGovGradCamSubscription = {
  onDeleteGovGradCAM:  {
    __typename: "GovGradCAM",
    ds_art: string,
    image: string | null,
  } | null,
};
