import BaseLayout from "../BaseLayout/BaseLayout";
import { Button } from "@mui/material";

const Reports = () => {
    return (
      <BaseLayout title="Reports"
      action={
          <Button
            variant="contained"
            size="large"
          >Button Title</Button>
      }>
      </BaseLayout>
    )
}

export default Reports