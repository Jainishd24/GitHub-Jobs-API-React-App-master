import React, { useState } from "react";
import { Card, Button, Collapse, Badge } from "react-bootstrap";

function decodeText(text) {
  if (!text) return "";
  return text
    .replace(/â/g, "'")   // right single quote
    .replace(/â|â/g, '"') // double quotes
    .replace(/â/g, "-")   // dash
    .replace(/â/g, "—")   // em dash
    .replace(/â¢/g, "•")   // bullet
    .replace(/â¦/g, "…")   // ellipsis
    .replace(/Ã©/g, "é")    // é
    .replace(/Ã¨/g, "è")
    .replace(/Ã¢/g, "â")
    .replace(/Ãª/g, "ê")
    .replace(/Ã/g, "A")
    .replace(/Â/g, "")      // stray accent
    .replace(/â€/g, "")
    .replace(/™/g, "™")
    .replace(/\s+/g, " ");  // normalize spacing
}

export default function Job({ job }) {
  const [open, setOpen] = useState(false);

  return (
    <Card className="mb-3 shadow-sm border-0">
      <Card.Body>
        {/* Header Row */}
        <div className="d-flex justify-content-between align-items-center flex-wrap">
          <div>
            <Card.Title>{job.title}</Card.Title>
            <Card.Subtitle className="text-muted mb-2">
              {job.company} — {job.location}
            </Card.Subtitle>
            <Badge bg="info" className="me-2">
              {job.type}
            </Badge>
            {job.salary && (
  <Badge bg="success" className="me-2">
    <span role="img" aria-label="money">
      💰
    </span>{" "}
    {job.salary}
  </Badge>
)}

          </div>

          <Button
            variant="primary"
            onClick={() => setOpen(!open)}
            aria-controls="job-description"
            aria-expanded={open}
          >
            {open ? "Hide Details" : "View Details"}
          </Button>
        </div>

        {/* Collapsible Job Description */}
        <Collapse in={open}>
          <div className="mt-4" id="job-description">
            <div
              dangerouslySetInnerHTML={{
                __html: decodeText(job.description),
              }}
            />
          </div>
        </Collapse>
      </Card.Body>
    </Card>
  );
}
