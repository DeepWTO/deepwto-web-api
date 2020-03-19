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
