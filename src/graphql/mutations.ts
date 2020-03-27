// tslint:disable
// this is an auto generated file. This will be overwritten

export const createGovGradCam = `mutation CreateGovGradCam(
  $input: CreateGovGradCAMInput!
  $condition: ModelGovGradCAMConditionInput
) {
  createGovGradCAM(input: $input, condition: $condition) {
    ds_art
    image
  }
}
`;
export const updateGovGradCam = `mutation UpdateGovGradCam(
  $input: UpdateGovGradCAMInput!
  $condition: ModelGovGradCAMConditionInput
) {
  updateGovGradCAM(input: $input, condition: $condition) {
    ds_art
    image
  }
}
`;
export const deleteGovGradCam = `mutation DeleteGovGradCam(
  $input: DeleteGovGradCAMInput!
  $condition: ModelGovGradCAMConditionInput
) {
  deleteGovGradCAM(input: $input, condition: $condition) {
    ds_art
    image
  }
}
`;
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
