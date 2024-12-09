/*
 * COPYRIGHT (c) Siemens AG 2018-2024 ALL RIGHTS RESERVED.
 */
import { useLocation } from '@docusaurus/router';

export default function useSearchParams(paramName: string) {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  return searchParams.get(paramName);
}
