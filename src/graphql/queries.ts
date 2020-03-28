// tslint:disable
// this is an auto generated file. This will be overwritten

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
export const getGovTokenized = `query GetGovTokenized($ds: Int!, $version: String!) {
  getGovTokenized(ds: $ds, version: $version) {
    ds
    version
    tokens
  }
}
`;
export const listGovTokenizeds = `query ListGovTokenizeds(
  $ds: Int
  $version: ModelStringKeyConditionInput
  $filter: ModelGovTokenizedFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listGovTokenizeds(
    ds: $ds
    version: $version
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      ds
      version
      tokens
    }
    nextToken
  }
}
`;
export const getGovGradCam = `query GetGovGradCam($ds_art: String!, $version: String!) {
  getGovGradCAM(ds_art: $ds_art, version: $version) {
    ds_art
    version
    weights
  }
}
`;
export const listGovGradCaMs = `query ListGovGradCaMs(
  $ds_art: String
  $version: ModelStringKeyConditionInput
  $filter: ModelGovGradCAMFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listGovGradCAMs(
    ds_art: $ds_art
    version: $version
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      ds_art
      version
      weights
    }
    nextToken
  }
}
`;
export const getArticleTokenized = `query GetArticleTokenized($article: String!, $version: String!) {
  getArticleTokenized(article: $article, version: $version) {
    article
    version
    tokens
  }
}
`;
export const listArticleTokenizeds = `query ListArticleTokenizeds(
  $article: String
  $version: ModelStringKeyConditionInput
  $filter: ModelArticleTokenizedFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listArticleTokenizeds(
    article: $article
    version: $version
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      article
      version
      tokens
    }
    nextToken
  }
}
`;
export const getArticleGradCam = `query GetArticleGradCam($ds_art: String!, $version: String!) {
  getArticleGradCAM(ds_art: $ds_art, version: $version) {
    ds_art
    version
    weights
  }
}
`;
export const listArticleGradCaMs = `query ListArticleGradCaMs(
  $ds_art: String
  $version: ModelStringKeyConditionInput
  $filter: ModelArticleGradCAMFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listArticleGradCAMs(
    ds_art: $ds_art
    version: $version
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      ds_art
      version
      weights
    }
    nextToken
  }
}
`;
