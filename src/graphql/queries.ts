// tslint:disable
// this is an auto generated file. This will be overwritten

export const getGovGradCam = `query GetGovGradCam($ds_art: String!) {
  getGovGradCAM(ds_art: $ds_art) {
    ds_art
    image
  }
}
`;
export const listGovGradCaMs = `query ListGovGradCaMs(
  $ds_art: String
  $filter: ModelGovGradCAMFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listGovGradCAMs(
    ds_art: $ds_art
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      ds_art
      image
    }
    nextToken
  }
}
`;
export const getInvokabilities = `query GetInvokabilities($ds_split: String!, $version: String!) {
  getInvokabilities(ds_split: $ds_split, version: $version) {
    ds_split
    version
    scores
  }
}
`;
export const listInvokabilitiess = `query ListInvokabilitiess(
  $ds_split: String
  $version: ModelStringKeyConditionInput
  $filter: ModelInvokabilitiesFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listInvokabilitiess(
    ds_split: $ds_split
    version: $version
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      ds_split
      version
      scores
    }
    nextToken
  }
}
`;
