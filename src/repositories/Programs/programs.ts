import axios from "axios";
import { deserialize } from "../../mappers/apiResMapper";
import { ProgramDetails } from "../../models/program";

class ProgramRepository {
  getProgramDetails = async () => {
    let res = await axios.get(
      `https://api.spaceXdata.com/v3/launches?limit=100`
    );
    const getProgramDetailsData: ProgramDetails = deserialize(ProgramDetails, {
      programs: res.data,
    });
    return getProgramDetailsData;
  };

  getProgramDetailsByYear = async (year:number) => {
    let res = await axios.get(
      `https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=${year}`
    );
    const getProgramDetailsData: ProgramDetails = deserialize(ProgramDetails, {
      programs: res.data,
    });
    return getProgramDetailsData;
  };

  getProgramDetailsBySuccessfulLaunch = async (option:string) => {
    let res = await axios.get(
      `https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${option}`
    );
    const getProgramDetailsData: ProgramDetails = deserialize(ProgramDetails, {
      programs: res.data,
    });
    return getProgramDetailsData;
  };

  getProgramDetailsBySuccessfulLand = async (option:string) => {
    let res = await axios.get(
      `https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=${option}`
    );
    const getProgramDetailsData: ProgramDetails = deserialize(ProgramDetails, {
      programs: res.data,
    });
    return getProgramDetailsData;
  };
}

const programRepository = new ProgramRepository();
export { programRepository as ProgramRepository };
