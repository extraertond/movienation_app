import axios from "axios";

export const axiosMock = axios as jest.Mocked<typeof axios>;

axiosMock.create.mockReturnThis();

export const mockRequestsOnce = <T = any>(data: T) => {
  axiosMock.request.mockResolvedValueOnce({ data });
};
