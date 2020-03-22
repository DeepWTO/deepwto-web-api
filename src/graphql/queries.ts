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
export const getInvokability = `query GetInvokability($ds_art: String!, $ds: Int!) {
  getInvokability(ds_art: $ds_art, ds: $ds) {
    ds_art
    ds
    art
    score
  }
}
`;
export const listInvokabilitys = `query ListInvokabilitys(
  $ds_art: String
  $ds: ModelIntKeyConditionInput
  $filter: ModelInvokabilityFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listInvokabilitys(
    ds_art: $ds_art
    ds: $ds
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      ds_art
      ds
      art
      score
    }
    nextToken
  }
}
`;
