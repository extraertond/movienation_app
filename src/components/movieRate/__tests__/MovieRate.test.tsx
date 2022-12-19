import { screen } from "@testing-library/react";
import { renderStoreHelper } from "../../../../__tests__/_utils_/renderStoreHelper";
import { MovieRate } from "../MovieRate";
import { MOVIE_DETAIL } from "../../../../__tests__/__fixtures__/MovieResponses";

describe("MovieRate component", () => {
  it("Should render movie rate and vote count", () => {
    renderStoreHelper({
      component: <MovieRate movie={MOVIE_DETAIL} />,
    });

    screen.getByText(MOVIE_DETAIL.rate);
    screen.getByText(`${MOVIE_DETAIL.vote_count} votes`);
  });
});
