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
export const createInvokability = `mutation CreateInvokability(
  $input: CreateInvokabilityInput!
  $condition: ModelInvokabilityConditionInput
) {
  createInvokability(input: $input, condition: $condition) {
    ds_art
    ds
    art
    score
  }
}
`;
export const updateInvokability = `mutation UpdateInvokability(
  $input: UpdateInvokabilityInput!
  $condition: ModelInvokabilityConditionInput
) {
  updateInvokability(input: $input, condition: $condition) {
    ds_art
    ds
    art
    score
  }
}
`;
export const deleteInvokability = `mutation DeleteInvokability(
  $input: DeleteInvokabilityInput!
  $condition: ModelInvokabilityConditionInput
) {
  deleteInvokability(input: $input, condition: $condition) {
    ds_art
    ds
    art
    score
  }
}
`;
