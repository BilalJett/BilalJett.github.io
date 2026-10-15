/*
  Portfolio content lives here. Edit this file to add photos, videos and code links.

  Every field below is optional except title and summary. Anything left empty
  ("" or []) is simply not shown on the page, so there are no "coming soon" gaps.

  images : ["assets/img/file.jpg", ...]        first one is the main photo
  video  : "https://www.youtube.com/watch?v=..."  YouTube link, or "assets/video/clip.mp4"
  code   : "https://github.com/BilalJett/..."
  facts  : ["short result with a number", ...]  shown as a small list
  paper  : "https://..."                          link to a paper or report (optional)
*/

const FLAGSHIP = {
  title: "QC32: a smartphone as a quadcopter flight controller",
  tools: "Java (Android), real-time PID control, sensor fusion, USB serial, ESP32-S3, Betaflight (C)",
  summary: [
    "QC32 turns an ordinary Android phone, a Samsung Galaxy A30s, into a quadcopter flight controller. The app reads the phone’s IMU and magnetometer, runs a full attitude-stabilization PID loop on a flight thread tuned to avoid garbage-collection pauses, and streams motor commands over USB at 2 Mbaud to an ESP32-S3 bridge that drives the ESCs. Pilot input comes from a FlySky transmitter over iBUS.",
    "I re-implemented the core of Betaflight 4.5.3’s mixer and PID math (AirMode throttle boost, motor-output range scaling and I-term gating) and validated the phone against a real Aocoda F405 flight controller running custom telemetry firmware. On the bench, the two produce nearly identical PID and motor responses. Early flight testing is in progress.",
    "This is my graduation project at the University of Baghdad, and the basis of a research paper on replacing a drone’s dedicated avionics with a single smartphone."
  ],
  facts: [
    "2 Mbaud USB link from phone to ESP32-S3 bridge",
    "PID and mixer math matched against Betaflight 4.5.3 on an F405 board",
    "500 ms RC-loss failsafe",
    "Live in-app PID tuning, blackbox logging, magnetometer calibration, RC smoothing"
  ],
  images: ["assets/img/qc32-bench.jpg"],
  video: "",
  code: ""
};

const SECTIONS = [
  {
    name: "Computer vision and machine learning",
    projects: [
      {
        title: "Real-time hand tracking and gesture control",
        tools: "Python, MediaPipe, OpenCV, pySerial, Arduino",
        summary: "Tracks a hand live with MediaPipe’s 21-point landmark model and computes distances between landmarks and finger angles. The measured gestures stream over serial to an Arduino, so hand motion becomes a physical control input.",
        images: ["assets/img/hand-tracking.jpg"],
        video: "", code: ""
      },
      {
        title: "Face recognition system",
        tools: "Python, OpenCV, face_recognition / dlib, NumPy, Raspberry Pi, ESP32-CAM",
        summary: "Encodes a gallery of known faces, caches the encodings, then identifies people live from a camera and draws labeled boxes. Built for several targets: a desktop version and a split setup where a PC does recognition for a Raspberry Pi.",
        images: [], video: "", code: ""
      },
      {
        title: "Real-time object detection",
        tools: "Python, OpenCV DNN, SSD MobileNet v3 (COCO)",
        summary: "Detects objects from the 80 COCO classes on a live webcam stream using OpenCV’s DNN module and a pre-trained SSD MobileNet v3, with boxes, labels, confidence scores and a running FPS counter.",
        images: [], video: "", code: ""
      }
    ]
  },
  {
    name: "Engineering software and data",
    projects: [
      {
        title: "RTS cooling-load calculator",
        tools: "Python, Streamlit, NumPy, PyInstaller",
        summary: "A desktop app that computes building cooling loads with the ASHRAE Radiant Time Series Method. Its pages walk through lighting, the four wall orientations, the roof and the total room load, using built-in construction-type and radiant-time-factor tables, then produce a report. Packaged as a standalone Windows program.",
        images: ["assets/img/rts-app.jpg"],
        video: "", code: "https://github.com/BilalJett/RTS"
      },
      {
        title: "Iraq Grade-12 national exam analysis",
        tools: "Python, pdf2image, OpenCV, Tesseract OCR, NumPy, Matplotlib",
        summary: "An OCR pipeline over Iraq’s published Grade-12 results: it converts hundreds of PDF result sheets to images, crops the score regions and reads the averages with Tesseract, grouped by province. An analysis tool then plots per-province distributions and measures failure and retake rates. The resulting database covers about 6 million students across 9 years.",
        images: ["assets/img/exam-histogram.jpg"],
        video: "", code: ""
      }
    ]
  },
  {
    name: "Embedded systems and drones",
    projects: [
      {
        title: "Propeller thrust test rig",
        tools: "Arduino C++, HX711 load cell, BLDC motor and ESC",
        summary: "Sweeps a brushless motor’s throttle across the full 1000–2000 µs range while logging thrust from a load cell, producing a thrust-versus-throttle curve for sizing propulsion.",
        facts: ["About 600 g of thrust per motor on a 5-inch propeller"],
        images: ["assets/img/thrust-rig.jpg"],
        video: "", code: ""
      },
      {
        title: "ESP-NOW messaging panels",
        tools: "ESP32 C++, ESP-NOW, wiring, 3D-printed enclosures",
        summary: "Two standalone devices that send and display messages to each other over ESP-NOW with no network in between. I built them with students at Baghdad Ishik College for the Iraq National Project Olympiad (INPO), and designed and printed the enclosures.",
        images: ["assets/img/espnow-panel.jpg"],
        video: "", code: ""
      }
    ]
  },
  {
    name: "CAD and mechanical design",
    projects: [
      {
        title: "Automatic medical stretcher, scale model",
        tools: "Mechanical design, 3D printing, stepper motor and gearing",
        summary: "A scale model of a stretcher that moves a patient across onto a bed, driven by a stepper motor through a geared belt drive. Built with high-school students for INPO, where it won the school’s only gold medal.",
        facts: ["Gold medal, Iraq National Project Olympiad"],
        images: ["assets/img/stretcher-drive.jpg", "assets/img/stretcher-frame.jpg"],
        video: "", code: ""
      },
      {
        title: "Quadcopter frames and mounts",
        tools: "SolidWorks, 3D printing",
        summary: "Holder assemblies for mounting flight electronics on an airframe, including the test platform that carries the phone for QC32: top and bottom plates, the full assembly and a compact variant.",
        images: ["assets/img/quad-mount-cad.jpg"],
        video: "", code: ""
      },
      {
        title: "Printed parts and prototypes",
        tools: "SolidWorks, 3D printing, design for manufacturing",
        summary: "Practical printed mechanical parts and models.",
        images: ["assets/img/turbofan-model.jpg"],
        video: "", code: ""
      }
    ]
  }
];
