import Breadcrumb from "@/components/Common/Breadcrumb";
import Meeting from "@/components/Meeting";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meeting Page",
  description: "This is Meeting Page",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb pageName="Meeting Page" description="This is Meeting Page" />

      <Meeting />
    </>
  );
};

export default ContactPage;
