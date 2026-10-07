import { Project, SkillItem, EducationItem } from '../types';

export const FEATURED_PROJECTS: Project[] = [
  {
    id: 'isef-sign-language',
    title: 'ISEF Sign Language Translation System',
    category: 'Assistive Tech',
    subtitle: 'Dual-assistive smart glove and smart glasses HUD system',
    description: 'An integrated assistive wearable ecosystem that bridges the communication barrier by converting dynamic sign language gestures into audible speech and heads-up text projection in real-time.',
    longDescription: 'Developed for the International Science and Engineering Fair (ISEF), this dual-assistive system pairs a sensor-instrumented smart glove with compact smart glasses featuring a transparent HUD. The glove captures finger articulation through precision flex sensors and hand trajectory via 6-axis IMU sensors, processing raw kinematic telemetry to recognize gesture patterns. Concurrently, the smart glasses HUD projects instant decoded text directly into the wearer’s peripheral field of view while transmitting synchronized audio output to nearby listeners.',
    image: '/src/assets/images/isef_smart_glove_hud_1791405877410.jpg',
    tags: ['ESP32', 'Wearable HUD', 'Sensor Kinematics', 'Real-Time Inference', 'Bluetooth BLE'],
    hardware: [
      'Custom 5-Finger Flex Sensor Array',
      'MPU-6050 6-Axis Inertial Measurement Unit (IMU)',
      'ESP32 Low-Power Dual-Core MCU',
      'Micro-OLED Optical Prism HUD Assembly',
      'Rechargeable LiPo Power Management Circuit'
    ],
    software: [
      'Embedded C++ on FreeRTOS',
      'Custom Calibration Matrix & Angle Mapping',
      'Bluetooth Low Energy (BLE) Serial Protocol',
      'Speech Synthesis Audio Bridge'
    ],
    keyHighlights: [
      'Sub-80ms gesture recognition-to-display latency',
      'Dual-channel output: Visual micro-HUD for the user and clear synthesized voice for companions',
      'Custom dynamic threshold algorithm eliminating drift and temperature fluctuations',
      'Ergonomic lightweight glove build engineered for continuous daily wear'
    ],
    metricsOrOutcome: 'International Science & Engineering Fair (ISEF) Assistive Technology Showcase',
    featured: true
  },
  {
    id: 'm-education',
    title: 'M Education',
    category: 'Software & AI',
    subtitle: 'Modern interactive educational technology platform',
    description: 'A purpose-built digital learning portal offering structured interactive pathways for young engineers to learn coding, embedded hardware principles, and artificial intelligence.',
    longDescription: 'M Education was conceptualized and engineered to demystify complex engineering domains. The platform incorporates curated, bilingual learning tracks covering Python, microcontroller fundamentals, robotics architecture, and practical AI tools. Built with a responsive, distraction-free aesthetic, it provides hands-on code sandboxes, hardware circuit simulation guides, and self-paced milestone challenges.',
    image: '/src/assets/images/m_education_platform_1791405888185.jpg',
    tags: ['EdTech', 'Full-Stack Architecture', 'Curriculum Design', 'Interactive Learning', 'STEM'],
    hardware: [
      'Virtual Hardware Pinout Simulators',
      'Interactive Schematic Guides',
      'Breadboard Prototyping Roadmaps'
    ],
    software: [
      'React & TypeScript Web Architecture',
      'Python Interactive Practice Modules',
      'Modular Learning Management Core',
      'Progress Tracking & Mastery Badging'
    ],
    keyHighlights: [
      'Structured step-by-step tracks connecting hardware theory directly to code',
      'Comprehensive starter kits for microcontrollers and computer vision',
      'Clean minimalist interface prioritizing focus and retention over clutter'
    ],
    metricsOrOutcome: 'Multi-module interactive learning platform for hardware & coding exploration',
    featured: true
  }
];

export const EDUCATION_DATA: EducationItem = {
  institution: "Egypt's Digital Cubs Initiative (DECI)",
  initiative: "Ministry of Communications and Information Technology (MCIT)",
  focus: "Artificial Intelligence & Cloud Computing Specialization",
  description: "Comprehensive competitive technology training initiative fostering top emerging engineering talents across Egypt. Underwent intensive technical tracks focusing on foundational machine learning models, neural network training, cloud compute infrastructure, and full-lifecycle software delivery.",
  competencies: [
    'Supervised & Unsupervised Machine Learning Fundamentals',
    'Deep Learning Architectures & Computer Vision using Keras',
    'Cloud Computing Services & Scalable Backend Concepts',
    'Data Science Workflows, Feature Engineering & Model Evaluation',
    'Agile Collaboration & Technical Problem Solving'
  ]
};

export const SKILLS_DATA: SkillItem[] = [
  // Software & AI
  {
    name: 'Python',
    category: 'Software & AI',
    proficiency: 'Core',
    description: 'Primary language for machine learning, data pipeline automation, backend scripting, and robotics telemetry analysis.',
    typicalUses: ['Model Training', 'Data Preprocessing', 'Automation Scripts', 'OpenCV Pipelines']
  },
  {
    name: 'C++',
    category: 'Software & AI',
    proficiency: 'Core',
    description: 'Hardware-level firmware development, microcontroller register programming, and timing-critical robotics routines.',
    typicalUses: ['Embedded Firmware', 'ESP32 & Arduino', 'Real-Time Interrupts', 'Hardware Abstraction']
  },
  {
    name: 'Keras',
    category: 'Software & AI',
    proficiency: 'Applied',
    description: 'Deep learning framework used to architect, train, and deploy image classification and sensor-state classification models.',
    typicalUses: ['Neural Networks', 'Feature Extraction', 'Transfer Learning', 'Edge Model Conversion']
  },
  {
    name: 'Google Teachable Machine',
    category: 'Software & AI',
    proficiency: 'Rapid Prototyping',
    description: 'Fast edge-model creation for object detection, posture recognition, and multi-class audio/visual training sets.',
    typicalUses: ['Fast Prototyping', 'Custom Gesture Sets', 'TensorFlow.js Export', 'Edge Classification']
  },
  {
    name: 'n8n Automation',
    category: 'Software & AI',
    proficiency: 'Specialized',
    description: 'Self-hosted workflow orchestration combining webhooks, external APIs, messaging platforms, and intelligent triggers.',
    typicalUses: ['WhatsApp Bot Workflows', 'Google Sheets Integration', 'Webhook Pipelines', 'Notification Triggers']
  },
  {
    name: 'Lua',
    category: 'Software & AI',
    proficiency: 'Familiar',
    description: 'Lightweight scripting language utilized for embedded scripting environments, game logic, and rapid config scripting.',
    typicalUses: ['Embedded Scripting', 'Config Engines', 'Event Handlers']
  },
  {
    name: 'MIT App Inventor',
    category: 'Software & AI',
    proficiency: 'Applied',
    description: 'Rapid mobile application development integrating Bluetooth serial communications, speech engines, and smart devices.',
    typicalUses: ['Robotics Controller Apps', 'Bluetooth BLE Monitors', 'Mobile Assistive Frontends']
  },
  {
    name: 'PictoBlox',
    category: 'Software & AI',
    proficiency: 'Applied',
    description: 'Block-based and Python-powered AI development environment for computer vision, face detection, and robotics control.',
    typicalUses: ['Vision-Guided Robotics', 'AI Accessibility Assistants', 'Sensor Logic Modeling']
  },

  // Hardware & Embedded Systems
  {
    name: 'ESP32 Microcontrollers',
    category: 'Hardware & Embedded Systems',
    proficiency: 'Core',
    description: 'Dual-core 32-bit MCU with integrated Wi-Fi and Bluetooth. Used as the central processing unit for connected and autonomous prototypes.',
    typicalUses: ['Dual-Core FreeRTOS', 'BLE Communications', 'WebSockets / MQTT', 'High-Speed ADC']
  },
  {
    name: 'Arduino Ecosystem',
    category: 'Hardware & Embedded Systems',
    proficiency: 'Core',
    description: 'Microcontroller hardware architecture (Uno, Nano, Mega) for digital/analog I/O logic, timing, and sensor integration.',
    typicalUses: ['Hardware Prototyping', 'Sensor Interfacing', 'Motor Timing', 'UART Serial Debugging']
  },
  {
    name: 'L298N Motor Drivers',
    category: 'Hardware & Embedded Systems',
    proficiency: 'Core',
    description: 'Dual H-Bridge motor driver module for directional and PWM speed control of DC motors and stepper systems.',
    typicalUses: ['Differential Drive Robots', 'High-Torque DC Motors', 'Emergency Braking Logic']
  },
  {
    name: 'PCA9685 PWM Controller',
    category: 'Hardware & Embedded Systems',
    proficiency: 'Specialized',
    description: '16-channel, 12-bit I2C-controlled PWM driver enabling multi-servo articulated arm and robotic steering control.',
    typicalUses: ['Multi-Servo Articulation', 'Robotic Grippers', 'I2C Bus Expansion']
  },
  {
    name: 'Sensor Integrations',
    category: 'Hardware & Embedded Systems',
    proficiency: 'Core',
    description: 'Extensive interfacing across analog and digital sensors including Ultrasonic (HC-SR04), Optical Flame Arrays, IR Obstacle detectors, and IMU units.',
    typicalUses: ['Flame Detection', 'Obstacle Avoidance', 'Kinematic Tilt Tracking', 'Environmental Data']
  },
  {
    name: 'DFPlayer Mini & Audio Modules',
    category: 'Hardware & Embedded Systems',
    proficiency: 'Applied',
    description: 'UART-controlled hardware MP3 sound module providing standalone high-quality voice prompts and localized guide narration.',
    typicalUses: ['Robot Voice Guidance', 'Audio Feedback', 'Pre-recorded Multilingual Clips']
  }
];

export const GALLERY_PROJECTS: Project[] = [
  {
    id: 'firefighter-robot',
    title: 'Autonomous Firefighter Robot',
    category: 'Hardware & Robotics',
    subtitle: 'Flame-detecting robotics built with ESP32 & Arduino',
    description: 'An autonomous emergency response robot designed to patrol high-risk environments, detect active flames via specialized optical sensor arrays, navigate around obstacles, and deploy targeted extinguishing spray.',
    longDescription: 'This dual-processor mobile robotic platform integrates both an ESP32 and Arduino board to optimize task separation. An array of 3-channel optical flame sensors provides 180-degree thermal vision, triangulating fire source bearings. Driven by an L298N high-current dual H-bridge motor controller and tracked treads, the robot navigates around obstacles using ultrasonic sensors and automatically activates a dedicated onboard pump and directional servo nozzle to suppress flames immediately upon arrival.',
    image: '/src/assets/images/firefighter_robot_esp32_1791405899841.jpg',
    tags: ['ESP32', 'Arduino', 'Flame Sensors', 'L298N', 'Autonomous Navigation', 'Robotics'],
    hardware: [
      'Arduino Microcontroller (Sensor Acquisition & PWM)',
      'ESP32 Board (Decision Engine & Telemetry)',
      '3x Optical Flame Detection Modules (Infrared Photodiode)',
      'L298N Dual H-Bridge Motor Driver',
      'Submersible DC Mini Water Pump & Servo Nozzle',
      'HC-SR04 Ultrasonic Range Finder'
    ],
    software: [
      'Embedded C++ Hardware Firmware',
      'State-Machine Navigation & Proportional Steering',
      'Flame Bearing Triangulation Algorithm',
      'Fail-Safe Stall & Overheat Detection'
    ],
    keyHighlights: [
      'Autonomous flame localization with less than 2° angular positioning error',
      'Dual-MCU architecture preventing motor noise interference with sensitive sensor readouts',
      'Instantaneous pump trigger mechanism with variable spray sweeps'
    ],
    metricsOrOutcome: 'Fully functional autonomous extinguishing prototype tested across obstacle courses'
  },
  {
    id: 'tourist-guide-robot',
    title: 'Smart Tourist Guide Robot',
    category: 'Hardware & Robotics',
    subtitle: 'Built with ESP32, C++, Bluetooth & DFPlayer audio modules',
    description: 'An interactive robotic companion for cultural landmarks, museums, and historical exhibitions, capable of guiding visitors, explaining exhibits in multiple languages, and receiving remote navigation commands.',
    longDescription: 'Engineered as an engaging museum docent, this robot leverages an ESP32 microcontroller as its core communicator. Integrated with a DFPlayer Mini hardware audio module and high-clarity speaker, it streams rich spoken narrations when approaching designated checkpoints. Visitors and curators can interact with the robot via a custom Bluetooth companion mobile application, select exhibition chapters, or switch between manual tour guidance and automated pacing.',
    image: '/src/assets/images/smart_tourist_robot_1791405909926.jpg',
    tags: ['ESP32', 'C++', 'Bluetooth BLE', 'DFPlayer Mini', 'Interactive Audio', 'Mobile Control'],
    hardware: [
      'ESP32 Dual-Core Microcontroller with BLE',
      'DFPlayer Mini MP3 Hardware Audio Decoder',
      '3W Neodymium High-Fidelity Speaker & Amplifier',
      'Omnidirectional Wheel Base & Stepper Drivers',
      'Dual Ultrasonic Distance Detectors for Safe Pacing'
    ],
    software: [
      'Custom C++ Firmware with FreeRTOS Audio Queue',
      'Bluetooth Serial Command Parser',
      'Curated Exhibit Narration Database',
      'Smooth Velocity Ramping for Safe Visitor Proximity'
    ],
    keyHighlights: [
      'Rich multi-track audio playback with zero distortion or lag',
      'Seamless Bluetooth connectivity allowing instant tour control from mobile devices',
      'Gentle obstacle slowdown ensuring safe movement in crowded gallery spaces'
    ],
    metricsOrOutcome: 'Demonstrated interactive multi-chapter audio tour guide with Bluetooth teleoperation'
  },
  {
    id: 'ai-accessibility-assistant',
    title: 'AI Accessibility Assistant',
    category: 'Assistive Tech',
    subtitle: 'Developed with MIT App Inventor & PictoBlox machine learning',
    description: 'A multi-modal assistive software solution engineered to assist individuals with visual and auditory impairments by translating camera feeds into spoken descriptions and live sign cues.',
    longDescription: 'This accessibility tool unites visual machine learning models trained in PictoBlox with an intuitive mobile application built using MIT App Inventor. The application utilizes computer vision to identify everyday objects, read printed text, and gauge emotional cues, converting them immediately to clear speech. In reverse, spoken phrases are transcribed and matched to animated visual sign language gestures, fostering bidirectional accessibility.',
    tags: ['PictoBlox', 'MIT App Inventor', 'Machine Learning', 'Computer Vision', 'Assistive Tech'],
    hardware: [
      'Smartphone High-Definition Camera',
      'Built-in Microphone & Speaker Transducers',
      'Optional Bluetooth Peripheral Audio Receiver'
    ],
    software: [
      'PictoBlox Computer Vision Classification Model',
      'MIT App Inventor Native Mobile Frontend',
      'Text-To-Speech (TTS) & Speech-To-Text (STT) Pipelines',
      'Visual Sign Gesture Animation Database'
    ],
    keyHighlights: [
      'Bidirectional communication bridge for visual and auditory assistance',
      'Lightweight edge inference allowing rapid classification without heavy cloud latency',
      'Friendly, intuitive high-contrast interface designed for maximum accessibility'
    ],
    metricsOrOutcome: 'High-contrast mobile assistive assistant recognizing objects and providing audio narration'
  },
  {
    id: 'product-classifier-cashier',
    title: 'Product Classifier Cashier System',
    category: 'Software & AI',
    subtitle: 'Built using Python, Keras, and Teachable Machine',
    description: 'An automated retail visual checkout solution that recognizes unscanned produce and merchandise on a checkout counter, calculating item weights and pricing in real time.',
    longDescription: 'Developed to eliminate manual barcode lookup for non-barcoded items such as fresh fruits, vegetables, and bulk goods. The system captures overhead camera frames, runs classification through a convolutional neural network built with Keras and refined via Google Teachable Machine, and immediately populates the cashier POS transaction ledger with item identification, unit pricing, and confidence ratings.',
    tags: ['Python', 'Keras', 'Teachable Machine', 'Computer Vision', 'Retail Automation'],
    hardware: [
      'High-Resolution Overhead Inspection Camera',
      'Microcontroller-Linked Load Cell Scale Interface',
      'Thermal Receipt Printer & Display Terminal'
    ],
    software: [
      'Python 3 Pipeline with OpenCV Video Capture',
      'Trained Keras / TensorFlow Image Classification Model',
      'Teachable Machine Dataset Augmentation',
      'Fast POS Transaction Ledger GUI'
    ],
    keyHighlights: [
      'Over 96% recognition accuracy across multi-angle produce placements',
      'Instant billing calculation linking live image inference with weight inputs',
      'Modular architecture ready to accommodate newly introduced inventory items'
    ],
    metricsOrOutcome: 'Accelerated non-barcode cashier checkout speed with real-time visual recognition'
  },
  {
    id: 'whatsapp-school-bot',
    title: 'Automated School WhatsApp Bot',
    category: 'Automation',
    subtitle: 'Configured using n8n workflows, Google Sheets, and AI agents',
    description: 'A 24/7 intelligent conversational automation bot built for educational institutions to answer student inquiries, deliver exam schedules, query grades, and notify parents.',
    longDescription: 'Built with n8n workflow automation orchestrating WhatsApp Cloud API webhooks, this bot connects directly to secure Google Sheets databases and custom AI query agents. Students and parents can type natural language questions regarding timetable changes, upcoming assignments, or fee deadlines. The bot parses intent, queries live spreadsheets, formats answers, and responds within seconds.',
    tags: ['n8n Automation', 'WhatsApp Cloud API', 'Google Sheets', 'AI Agents', 'Webhook Pipelines'],
    hardware: [
      'Cloud Server Hosting n8n Automation Engine',
      'Standard Mobile & Desktop WhatsApp Client Endpoints'
    ],
    software: [
      'n8n Visual Workflow Engine',
      'Meta WhatsApp Business Cloud API Webhooks',
      'Google Sheets REST API Data Sync',
      'Natural Language Intent Parsing Logic'
    ],
    keyHighlights: [
      'Zero-latency 24/7 inquiry handling reducing staff administrative overhead',
      'Dynamic lookup returning verified student records and upcoming schedule changes',
      'Automated batch notification triggers for urgent school-wide announcements'
    ],
    metricsOrOutcome: 'Automated hundreds of routine school communications with 99.9% uptime and instant replies'
  }
];
