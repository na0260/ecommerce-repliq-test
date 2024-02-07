import NavBar from "@/app/components/NavBar";
import {Typography} from "@/app/utils/materialComponents";

export default function Home() {
  return (
      <>
        <NavBar/>
        <Typography className="text-center m-10" variant="h4" color="blue-gray">
            This is the home page
        </Typography>
      </>
  );
}
