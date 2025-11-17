import { useEffect } from "react";

export const applyfilter = ({
  campaignData,
  filter,
}: {
  campaignData: any;
  filter: any;
}) => {
  return campaignData.filter((item: any) => {
    const itemStart = new Date(item.startDate);
    const itemEnd = new Date(item.endDate);

    const filterStart = new Date(filter.startDate);
    const filterEnd = new Date(filter.endDate);

    // status (case-insensitive)
    if (
      filter.status &&
      item.status.toLowerCase() !== filter.status.toLowerCase()
    ) {
      return false;
    }

    // start date
    if (itemStart < filterStart) return false;

    // end date
    if (itemEnd > filterEnd) return false;

    return true;
  });
};

export const handleBodyOveflow=({dependency}:{dependency:boolean})=>{
  useEffect(() => {
    if (dependency) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [dependency])
};