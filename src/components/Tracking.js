import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import ApiService from "../services/ApiService";

function Tracking() {
  const { trackingId } = useParams();
  const [trackingDetails, setTrackingDetails] = useState(null);

  // Memoize the fetchTrackingDetails function
  const fetchTrackingDetails = useCallback(async () => {
    try {
      const details = await ApiService.fetchTrackingDetails(trackingId);
      setTrackingDetails(details);
    } catch (error) {
      console.error("Error fetching tracking details:", error);
    }
  }, [trackingId]);

  useEffect(() => {
    // Call the memoized function
    fetchTrackingDetails();
  }, [fetchTrackingDetails]);

  return (
    <div>
      <h2>Tracking Details</h2>
      {trackingDetails ? (
        <div>
          <p>Tracking ID: {trackingDetails.trackingId}</p>
          <p>Status: {trackingDetails.status}</p>
        </div>
      ) : (
        <p>Loading tracking details...</p>
      )}
    </div>
  );
}

export default Tracking;
