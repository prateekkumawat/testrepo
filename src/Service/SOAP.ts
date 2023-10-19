import { useParams } from 'react-router-dom';
import { useApi } from '../Api/useApi';
import { ConstructUrlFromQueryParams } from '../utility';

export const SOAPService = () => {
  const { baseApi } = useApi();
  const getTemplate = async (templateId: string) => {
    const { data } = await baseApi().get(
      `/templates/getTemplate/${templateId}`
    );
    return data;
  };
  const editTemplate = async (
    templateId: string,
    payload: any,
    queryParams: any
  ) => {
    const { data } = await baseApi().patch(
      `/templates/editTemplate/${templateId}${ConstructUrlFromQueryParams(
        queryParams
      )}`,
      payload
    );
    return data;
  };

  const createTemplate = async (payload: any) => {
    const { data } = await baseApi().post(`/templates/createTemplate`, payload);
    return data;
  };
  const getAllTemplates = async () => {
    const { data } = await baseApi().get(`/templates/getAllTemplates`);
    return data;
  };

  return {
    getTemplate,
    editTemplate,
    createTemplate,
    getAllTemplates,
  };
};
