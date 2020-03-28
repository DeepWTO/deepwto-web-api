// tslint:disable
// this is an auto generated file. This will be overwritten

export const createInvokabilities = `mutation CreateInvokabilities(
  $input: CreateInvokabilitiesInput!
  $condition: ModelInvokabilitiesConditionInput
) {
  createInvokabilities(input: $input, condition: $condition) {
    ds_split
    version
    scores
  }
}
`;
export const updateInvokabilities = `mutation UpdateInvokabilities(
  $input: UpdateInvokabilitiesInput!
  $condition: ModelInvokabilitiesConditionInput
) {
  updateInvokabilities(input: $input, condition: $condition) {
    ds_split
    version
    scores
  }
}
`;
export const deleteInvokabilities = `mutation DeleteInvokabilities(
  $input: DeleteInvokabilitiesInput!
  $condition: ModelInvokabilitiesConditionInput
) {
  deleteInvokabilities(input: $input, condition: $condition) {
    ds_split
    version
    scores
  }
}
`;
export const createGovTokenized = `mutation CreateGovTokenized(
  $input: CreateGovTokenizedInput!
  $condition: ModelGovTokenizedConditionInput
) {
  createGovTokenized(input: $input, condition: $condition) {
    ds
    version
    tokens
  }
}
`;
export const updateGovTokenized = `mutation UpdateGovTokenized(
  $input: UpdateGovTokenizedInput!
  $condition: ModelGovTokenizedConditionInput
) {
  updateGovTokenized(input: $input, condition: $condition) {
    ds
    version
    tokens
  }
}
`;
export const deleteGovTokenized = `mutation DeleteGovTokenized(
  $input: DeleteGovTokenizedInput!
  $condition: ModelGovTokenizedConditionInput
) {
  deleteGovTokenized(input: $input, condition: $condition) {
    ds
    version
    tokens
  }
}
`;
export const createGovGradCam = `mutation CreateGovGradCam(
  $input: CreateGovGradCAMInput!
  $condition: ModelGovGradCAMConditionInput
) {
  createGovGradCAM(input: $input, condition: $condition) {
    ds_art
    version
    weights
  }
}
`;
export const updateGovGradCam = `mutation UpdateGovGradCam(
  $input: UpdateGovGradCAMInput!
  $condition: ModelGovGradCAMConditionInput
) {
  updateGovGradCAM(input: $input, condition: $condition) {
    ds_art
    version
    weights
  }
}
`;
export const deleteGovGradCam = `mutation DeleteGovGradCam(
  $input: DeleteGovGradCAMInput!
  $condition: ModelGovGradCAMConditionInput
) {
  deleteGovGradCAM(input: $input, condition: $condition) {
    ds_art
    version
    weights
  }
}
`;
export const createArticleTokenized = `mutation CreateArticleTokenized(
  $input: CreateArticleTokenizedInput!
  $condition: ModelArticleTokenizedConditionInput
) {
  createArticleTokenized(input: $input, condition: $condition) {
    article
    version
    tokens
  }
}
`;
export const updateArticleTokenized = `mutation UpdateArticleTokenized(
  $input: UpdateArticleTokenizedInput!
  $condition: ModelArticleTokenizedConditionInput
) {
  updateArticleTokenized(input: $input, condition: $condition) {
    article
    version
    tokens
  }
}
`;
export const deleteArticleTokenized = `mutation DeleteArticleTokenized(
  $input: DeleteArticleTokenizedInput!
  $condition: ModelArticleTokenizedConditionInput
) {
  deleteArticleTokenized(input: $input, condition: $condition) {
    article
    version
    tokens
  }
}
`;
export const createArticleGradCam = `mutation CreateArticleGradCam(
  $input: CreateArticleGradCAMInput!
  $condition: ModelArticleGradCAMConditionInput
) {
  createArticleGradCAM(input: $input, condition: $condition) {
    ds_art
    version
    weights
  }
}
`;
export const updateArticleGradCam = `mutation UpdateArticleGradCam(
  $input: UpdateArticleGradCAMInput!
  $condition: ModelArticleGradCAMConditionInput
) {
  updateArticleGradCAM(input: $input, condition: $condition) {
    ds_art
    version
    weights
  }
}
`;
export const deleteArticleGradCam = `mutation DeleteArticleGradCam(
  $input: DeleteArticleGradCAMInput!
  $condition: ModelArticleGradCAMConditionInput
) {
  deleteArticleGradCAM(input: $input, condition: $condition) {
    ds_art
    version
    weights
  }
}
`;
