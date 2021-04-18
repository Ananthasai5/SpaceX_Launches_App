import { JsonObject, JsonProperty } from "json2typescript";

@JsonObject("Program")
export class Program {
  @JsonProperty("flight_number", String)
  flight_number: number = undefined;
  @JsonProperty("mission_name", String)
  mission_name: string = undefined;
  @JsonProperty("mission_id", Array)
  mission_id: Array<string> = undefined;
  @JsonProperty("launch_year", String)
  launch_year: string = undefined;
  @JsonProperty("launch_success", Boolean)
  launch_success: boolean = undefined;
  @JsonProperty("land_success", Boolean)
  land_success: boolean = undefined;
  @JsonProperty("mission_patch", String)
  mission_patch: string = undefined;
}

@JsonObject("ProgramDetails")
export class ProgramDetails {
  @JsonProperty("programs", [])
  programs: Program[] = undefined;
}
