import { CsvFileReader } from "./CsvFileReader";
import { dateStringToDate } from "./utilities";
import { MatchResult } from "./MatchResult";
import { MatchData } from "./MatchData";

export class MatchReader extends CsvFileReader<MatchData> {
  mapRow = (row: string[]): MatchData => [
    dateStringToDate(row[0]),
    row[1],
    row[2],
    +row[3],
    +row[4],
    row[5] as MatchResult,
    row[6],
  ];
}
