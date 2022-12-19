import { screen, waitFor } from "@testing-library/react";
import { mockRequestsOnce } from "../../../../__tests__/__mocks__/axiosMock";
import { renderStoreHelper } from "../../../../__tests__/_utils_/renderStoreHelper";
import { MOVIE_DETAIL } from "../../../../__tests__/__fixtures__/MovieResponses";
import { MovieDetail } from "../MovieDetail";
import { getListNames, getVipCast } from "../../../helpers/movieHelper";

describe("MovieDetail component", () => {
  it("Should render all the movie info", async () => {
    mockRequestsOnce(MOVIE_DETAIL);

    renderStoreHelper({
      component: <MovieDetail />,
    });

    const expectedItems = [
      { key: "title", value: MOVIE_DETAIL.title },
      { key: "votes", value: `${MOVIE_DETAIL.vote_count} votes` },
      { key: "overview", value: MOVIE_DETAIL.overview },
      { key: "year", value: `(${new Date(MOVIE_DETAIL.release_date).getFullYear()})` },
      { key: "producers", value: getListNames(MOVIE_DETAIL.genres) },
      { key: "casting", value: getVipCast(MOVIE_DETAIL.credits.cast) },
      { key: "genres", value: getListNames(MOVIE_DETAIL.production_companies) },
      { key: "rate", value: Math.round(MOVIE_DETAIL.vote_average * 10) / 10 },
    ];
    await waitFor(() => {
      expectedItems.forEach((item) => expect(screen.getByText(item.value)));
    });
  });
});
