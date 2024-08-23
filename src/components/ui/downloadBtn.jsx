"use client";

import React, { useState } from "react";
import { FiDownload } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const DownloadBtn = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleDownload = () => {
    console.log("button click");

    setLoading(true);
    const pdfUrl =
      "https://app.flowcv.com/api/public/download_resume?token=f92ik9q28t";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.target = "_blank";
    link.download = "resume_Rakesh_Magar";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setLoading(false);
    toast({
      description: "Downloaded Successful",
    });
  };

  return (
    <Button
      variant="outline"
      size="lg"
      className="flex items-center gap-2 uppercase"
      onClick={handleDownload}
      disabled={loading}
    >
      <span>Download CV</span>
      {loading ? (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        <FiDownload className="text-xl" />
      )}
    </Button>
  );
};

export default DownloadBtn;
