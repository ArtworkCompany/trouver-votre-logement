import { useTranslation } from 'react-i18next';

export const useNestedTranslation = (nestedPath?: string) => {
  const { t } = useTranslation();

  return { n: (slug: string) => t(`${nestedPath}.${slug}`), t };
};
