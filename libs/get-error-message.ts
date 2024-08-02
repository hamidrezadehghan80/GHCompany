export function getErrorMessage(e: any) {
  const errorText = e.response?.data?.message || e.response?.data?.error;
  return errorText ? errorText + "" : "";
}
