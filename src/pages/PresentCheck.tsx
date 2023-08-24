import { Typography } from "@mui/material";
import MissingParticipants from "../components/MissingParticipants";
import GenerateQRCode from "../components/GenerateQRCode";
import SelectGroup from "../components/SelectGroup";

const PresentCheck = () => {
  const totalParticipates = 81;
  const currentParticipate = 71;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        flexDirection: "column",
      }}>
      <SelectGroup />
      <Typography variant='h1' >
        {currentParticipate}/ {totalParticipates}
      </Typography>
      <GenerateQRCode />
      <div style={{ padding: "10px", maxWidth: "100%", minWidth: "90%" }}>
        <MissingParticipants />
      </div>
    </div>
  );
};

export default PresentCheck;
