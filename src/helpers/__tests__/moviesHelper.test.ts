import { normalizeMovieList, normalizeMovieDetail } from "../movieHelper";
import { MOVIE_PREVIEW_LIST, MOVIE_DETAIL } from "../../../__tests__/__fixtures__/MovieResponses";

describe("moviesHelper helper", () => {
  describe("normalizeMovieList", () => {
    it("Should return an array and every object should have specified keys", () => {
      const expectedKeys = ["id", "title", "poster", "date", "year"];
      expect(Object.keys(normalizeMovieList(MOVIE_PREVIEW_LIST.results)[0])).toEqual(expectedKeys);
    });
  });

  describe("normalizeMovieDetail", () => {
    it("Should return an object with specified keys", () => {
      const expectedKeys = [
        "id",
        "title",
        "poster",
        "date",
        "year",
        "rate",
        "vote_count",
        "videos",
        "overview",
        "countries",
        "vipCast",
        "images",
        "producers",
        "genres",
      ];
      expect(Object.keys(normalizeMovieDetail(MOVIE_DETAIL))).toEqual(expectedKeys);
    });
  });
});
