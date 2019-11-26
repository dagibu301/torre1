import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { map, retry, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class TorreService {
  private _connections = [
    {
      person: {
        id: "pyJq0mjJ",
        subjectId: "40647",
        publicId: "gazeiloussama",
        name: "Oussama Ghzaiel",
        hasEmail: true,
        professionalHeadline: "Software developer",
        weight: 0
      },
      degrees: 1
    },
    {
      person: {
        id: "zNGA2Ejx",
        subjectId: "40654",
        publicId: "vitorsiqueira1204",
        name: "Vitor",
        hasEmail: true,
        professionalHeadline: "Trainne",
        weight: 0
      },
      degrees: 1
    },
    {
      person: {
        id: "9MB27LMg",
        subjectId: "40680",
        publicId: "alejamanzano8",
        name: "María Alejandra Manzano",
        hasEmail: true,
        professionalHeadline: "Treasure Hunter",
        weight: 0
      },
      degrees: 1
    },
    {
      person: {
        id: "eynqeLja",
        subjectId: "40678",
        publicId: "mamoomartinez7",
        name: "Maria Monica Martinez Amaya",
        hasEmail: true,
        professionalHeadline: "Developer",
        weight: 0
      },
      degrees: 1
    },
    {
      person: {
        id: "LMgZA7NE",
        subjectId: "41163",
        publicId: "danielceron",
        name: "Daniel Cerón",
        hasEmail: true,
        professionalHeadline: "ingeniero electrónico",
        weight: 0
      },
      degrees: 1
    }
  ];

  private _bio: any = {
    person: {
      professionalHeadline: "Full Stack Developer",
      completion: 0.8333,
      showPhone: false,
      created: "2019-11-16T23:52:01Z",
      verified: false,
      flags: {
        benefits: false,
        canary: false,
        enlauSource: false,
        fake: false,
        featureDiscovery: false,
        firstSignalSent: false,
        importingLinkedin: false,
        onBoarded: true,
        opportunitiesNotificationsSent: true,
        remoter: true,
        signalsFeatureDiscovery: true,
        signedInToOpportunities: false,
        importingLinkedinRecommendations: true
      },
      weight: 0,
      locale: "en",
      subjectId: "40642",
      hasEmail: true,
      name: "David Giraldo Bueno",
      links: [
        { id: "gyYAaDyP", name: "", address: "http://dgiraldo.me" },
        {
          id: "qy0Y9wNg",
          name: "linkedin",
          address: "https://www.linkedin.com/in/david-giraldo-bueno/"
        },
        {
          id: "KNxYrWME",
          name: "github",
          address: "https://github.com/dagibu301"
        }
      ],
      location: {
        name: "Cali, Valle del Cauca, Colombia",
        latitude: 3.4516467,
        longitude: -76.5319854,
        timezone: "America/Bogota",
        timezoneOffSet: -18000000
      },
      theme: "lightBlue700",
      id: "EM3dQoja",
      claimant: true,
      publicId: "davidgiraldobueno"
    },
    stats: { jobs: 3, education: 1, strengths: 27, interests: 3 },
    strengths: [
      {
        id: "JMel1RgN",
        code: 18312,
        name: "C",
        weight: 0,
        recommendations: 0,
        media: [],
        created: "2019-11-20T16:30:32"
      },
      {
        id: "bjA9LDwj",
        code: 32056,
        name: "Python",
        weight: 0,
        recommendations: 0,
        media: [],
        created: "2019-11-20T16:30:32"
      },
      {
        id: "8jp91Rxy",
        code: 20180,
        name: "MATLAB",
        weight: 0,
        recommendations: 0,
        media: [],
        created: "2019-11-20T16:30:32"
      },
      {
        id: "9MBDzxLy",
        code: 18318,
        name: "HTML5",
        weight: 0,
        recommendations: 0,
        media: [],
        created: "2019-11-17T00:02:47"
      },
      {
        id: "xM9EexrM",
        code: 23813,
        name: "Node.js",
        weight: 0,
        recommendations: 0,
        media: [],
        created: "2019-11-17T00:02:47"
      },
      {
        id: "9MBDz8Ky",
        code: 5983,
        name: "Programming",
        weight: 0,
        recommendations: 0,
        media: [],
        created: "2019-11-17T04:12:00"
      },
      {
        id: "xM9EemPM",
        code: 19679,
        name: "Database",
        weight: 0,
        recommendations: 0,
        media: [],
        created: "2019-11-17T04:12:00"
      },
      {
        id: "ZNO4ZXqM",
        code: 55587,
        name: "Hardworking",
        weight: 0,
        recommendations: 0,
        media: [],
        created: "2019-11-17T04:12:00"
      },
      {
        id: "WNVYqvqy",
        code: 45396,
        name: "Leadership",
        weight: 0,
        recommendations: 0,
        media: [],
        created: "2019-11-17T00:01:29"
      },
      {
        id: "eynr9ALy",
        code: 44352,
        name: "Innovation",
        weight: 0,
        recommendations: 0,
        media: [],
        created: "2019-11-17T00:01:03"
      },
      {
        id: "pyol5pPN",
        code: 398249,
        name: "Fast Prototyping",
        weight: 0,
        recommendations: 0,
        media: [],
        created: "2019-11-17T00:00:31"
      },
      {
        id: "gMRYemVN",
        code: 55370,
        name: "Design Thinking",
        weight: 0,
        recommendations: 0,
        media: [],
        created: "2019-11-17T00:00:12"
      },
      {
        id: "ny1OK7xM",
        code: 9486,
        name: "GIT",
        weight: 0,
        recommendations: 0,
        media: [],
        created: "2019-11-16T23:57:07"
      },
      {
        id: "Oj6dZO3N",
        code: 6217,
        name: "Project Management",
        weight: 0,
        recommendations: 0,
        media: [],
        created: "2019-11-16T23:56:53"
      },
      {
        id: "7M2V7kgM",
        code: 35444,
        name: "Networks",
        weight: 0,
        recommendations: 0,
        media: [],
        created: "2019-11-16T23:56:43"
      },
      {
        id: "JyQem33y",
        code: 17226,
        name: "WordPress",
        weight: 0,
        recommendations: 0,
        media: [],
        created: "2019-11-16T23:56:16"
      },
      {
        id: "nM4nEO5y",
        code: 50182,
        name: "React",
        weight: 0,
        recommendations: 0,
        media: [],
        created: "2019-11-16T23:56:03"
      },
      {
        id: "9MEeP7pM",
        code: 704,
        name: "Software Development",
        weight: 0,
        recommendations: 0,
        media: [],
        created: "2019-11-16T23:54:32"
      },
      {
        id: "VjwglkOj",
        code: 55317,
        name: "Creativity",
        weight: 0,
        recommendations: 0,
        media: [],
        created: "2019-11-16T23:54:27"
      },
      {
        id: "wM7G3xJM",
        code: 18319,
        name: "Javascript",
        weight: 0,
        recommendations: 0,
        media: [],
        created: "2019-11-16T23:54:22"
      },
      {
        id: "GNKGkKYN",
        code: 32590,
        name: "TypeScript",
        weight: 0,
        recommendations: 0,
        media: [],
        created: "2019-11-16T23:54:15"
      },
      {
        id: "KNxz5BKj",
        code: 59162,
        name: "SQL",
        weight: 0,
        recommendations: 0,
        media: [],
        created: "2019-11-16T23:54:02"
      },
      {
        id: "qy0zxDJM",
        code: 91476,
        name: "sass",
        weight: 0,
        recommendations: 0,
        media: [],
        created: "2019-11-16T23:53:57"
      },
      {
        id: "gyYoXg0M",
        code: 23009,
        name: "CSS",
        weight: 0,
        recommendations: 0,
        media: [],
        created: "2019-11-16T23:53:53"
      },
      {
        id: "zNGZY0Ey",
        code: 23802,
        name: "HTML",
        weight: 0,
        recommendations: 0,
        media: [],
        created: "2019-11-16T23:53:44"
      },
      {
        id: "qNPG3Zmy",
        code: 55898,
        name: "Ionic",
        weight: 0,
        recommendations: 0,
        media: [],
        created: "2019-11-16T23:53:42"
      },
      {
        id: "RyDKD6aj",
        code: 56207,
        name: "Angular",
        weight: 0,
        recommendations: 0,
        media: [],
        created: "2019-11-16T23:53:39"
      }
    ],
    interests: [
      {
        id: "ny1Jz5N8",
        code: 23813,
        name: "Node.js",
        media: [],
        created: "2019-11-17T00:04:39"
      },
      {
        id: "gMRWonj6",
        code: 18319,
        name: "Javascript",
        media: [],
        created: "2019-11-17T00:04:39"
      },
      {
        id: "pyoVqaj6",
        code: 50183,
        name: "React Native",
        media: [],
        created: "2019-11-17T00:04:39"
      }
    ],
    experiences: [
      {
        id: "vN8JgLPj",
        category: "education",
        name: "Ingeniería Electrónica",
        organizations: [
          { id: 43881, name: "Pontificia Universidad Javeriana Cali" }
        ],
        fromMonth: "June",
        fromYear: "2012",
        toMonth: "November",
        toYear: "2018",
        remote: false,
        additionalInfo: "",
        highlighted: true,
        weight: 0,
        verifications: 1,
        recommendations: 0,
        media: []
      },
      {
        id: "7M2VEn2M",
        category: "jobs",
        name: "Design Thinking Consultant",
        organizations: [
          { id: 74760, name: "Coomeva-Stanford University Innovation Project" }
        ],
        fromMonth: "October",
        fromYear: "2017",
        toMonth: "July",
        toYear: "2018",
        remote: false,
        additionalInfo: "",
        highlighted: true,
        weight: 0,
        verifications: 1,
        recommendations: 0,
        media: [
          {
            group: "dc57a15d-bf51-4df6-880e-b7ed4c8323d9",
            mediaType: "link",
            description: "",
            mediaItems: [
              {
                id: "5ykbeZjQ",
                address:
                  "https://www.javerianacali.edu.co/me-310-global-design-innovation-course-stanford-university"
              }
            ]
          }
        ]
      },
      {
        id: "JyQeP0ny",
        category: "jobs",
        name: "IT Administrator",
        organizations: [{ id: 74759, name: "Valor Homes 100 LLC" }],
        fromMonth: "August",
        fromYear: "2018",
        toMonth: "July",
        toYear: "2019",
        remote: false,
        additionalInfo: "",
        highlighted: true,
        weight: 0,
        verifications: 1,
        recommendations: 0,
        media: [
          {
            group: "076b2e24-5278-4a47-b01d-69e52c7eb8cd",
            mediaType: "link",
            description: "",
            mediaItems: [
              { id: "OMvbDRM8", address: "http://valorhomesales.com" }
            ]
          }
        ]
      },
      {
        id: "nM4nQ4ky",
        category: "jobs",
        name: "Full Stack Developer",
        organizations: [{ id: 74758, name: "Level 33 Soluções" }],
        fromMonth: "July",
        fromYear: "2019",
        toMonth: "",
        toYear: "",
        highlighted: true,
        weight: 0,
        verifications: 2,
        recommendations: 0,
        media: [
          {
            group: "8b5153d9-716b-46c2-8de7-c03c9a25d2c1",
            mediaType: "link",
            description: "",
            mediaItems: [
              { id: "mjlBAANZ", address: "http://www.level33.com.br" }
            ]
          }
        ]
      }
    ],
    achievements: [],
    jobs: [
      {
        id: "7M2VEn2M",
        category: "jobs",
        name: "Design Thinking Consultant",
        organizations: [
          { id: 74760, name: "Coomeva-Stanford University Innovation Project" }
        ],
        fromMonth: "October",
        fromYear: "2017",
        toMonth: "July",
        toYear: "2018",
        remote: false,
        additionalInfo: "",
        highlighted: true,
        weight: 0,
        verifications: 1,
        recommendations: 0,
        media: [
          {
            group: "dc57a15d-bf51-4df6-880e-b7ed4c8323d9",
            mediaType: "link",
            description: "",
            mediaItems: [
              {
                id: "5ykbeZjQ",
                address:
                  "https://www.javerianacali.edu.co/me-310-global-design-innovation-course-stanford-university"
              }
            ]
          }
        ]
      },
      {
        id: "JyQeP0ny",
        category: "jobs",
        name: "IT Administrator",
        organizations: [{ id: 74759, name: "Valor Homes 100 LLC" }],
        fromMonth: "August",
        fromYear: "2018",
        toMonth: "July",
        toYear: "2019",
        remote: false,
        additionalInfo: "",
        highlighted: true,
        weight: 0,
        verifications: 1,
        recommendations: 0,
        media: [
          {
            group: "076b2e24-5278-4a47-b01d-69e52c7eb8cd",
            mediaType: "link",
            description: "",
            mediaItems: [
              { id: "OMvbDRM8", address: "http://valorhomesales.com" }
            ]
          }
        ]
      },
      {
        id: "nM4nQ4ky",
        category: "jobs",
        name: "Full Stack Developer",
        organizations: [{ id: 74758, name: "Level 33 Soluções" }],
        fromMonth: "July",
        fromYear: "2019",
        toMonth: "",
        toYear: "",
        highlighted: true,
        weight: 0,
        verifications: 2,
        recommendations: 0,
        media: [
          {
            group: "8b5153d9-716b-46c2-8de7-c03c9a25d2c1",
            mediaType: "link",
            description: "",
            mediaItems: [
              { id: "mjlBAANZ", address: "http://www.level33.com.br" }
            ]
          }
        ]
      }
    ],
    projects: [],
    publications: [],
    education: [
      {
        id: "vN8JgLPj",
        category: "education",
        name: "Ingeniería Electrónica",
        organizations: [
          { id: 43881, name: "Pontificia Universidad Javeriana Cali" }
        ],
        fromMonth: "June",
        fromYear: "2012",
        toMonth: "November",
        toYear: "2018",
        remote: false,
        additionalInfo: "",
        highlighted: true,
        weight: 0,
        verifications: 1,
        recommendations: 0,
        media: []
      }
    ],
    opportunities: [
      { id: "vy5XL4Wj", interest: "jobs", field: "private", data: false },
      { id: "ANaVZ0JM", interest: "jobs", field: "active", data: true },
      { id: "AjrxY5lN", interest: "gigs", field: "private", data: false },
      { id: "kybV3xgy", interest: "gigs", field: "active", data: true },
      {
        id: "ny1v4KmN",
        interest: "internships",
        field: "private",
        data: false
      },
      { id: "gMRK7ekj", interest: "internships", field: "active", data: true },
      { id: "pyoxD5eN", interest: "mentoring", field: "active", data: true },
      { id: "eynVW9Ey", interest: "advising", field: "active", data: true },
      {
        id: "8yZo58LN",
        interest: "jobs",
        field: "desirable-compensation-currency",
        data: "USD$"
      },
      {
        id: "EM3J2wbN",
        interest: "jobs",
        field: "desirable-compensation-amount",
        data: 1000
      },
      {
        id: "kNmOz5bj",
        interest: "jobs",
        field: "desirable-compensation-periodicity",
        data: "monthly"
      },
      {
        id: "bjApA8VM",
        interest: "jobs",
        field: "desirable-compensation-publicly-visible",
        data: true
      },
      {
        id: "xyX16gmN",
        interest: "gigs",
        field: "desirable-compensation-currency",
        data: "USD$"
      },
      {
        id: "vN8Wrm8y",
        interest: "gigs",
        field: "desirable-compensation-amount",
        data: 50
      },
      {
        id: "0yzxQkqM",
        interest: "gigs",
        field: "desirable-compensation-periodicity",
        data: "hourly"
      },
      {
        id: "RyDJkDlM",
        interest: "gigs",
        field: "desirable-compensation-publicly-visible",
        data: true
      },
      {
        id: "GNKPDkeM",
        interest: "internships",
        field: "desirable-compensation-currency",
        data: "USD$"
      },
      {
        id: "wM7za3vN",
        interest: "internships",
        field: "desirable-compensation-amount",
        data: 1000
      },
      {
        id: "VjwxwlKy",
        interest: "internships",
        field: "desirable-compensation-periodicity",
        data: "monthly"
      },
      {
        id: "9MEkJPgy",
        interest: "internships",
        field: "desirable-compensation-publicly-visible",
        data: true
      },
      {
        id: "ANaVZ1JM",
        interest: "industries",
        field: "types",
        data: [
          { locale: "en", name: "Technology" },
          { code: 9530, locale: "en", name: "Software & Computer Services" },
          { locale: "en", name: "Software Developer" },
          { locale: "en", name: "Information technology" }
        ]
      }
    ],
    languages: [
      { language: "English", fluency: "fully-fluent" },
      { language: "Spanish", fluency: "fully-fluent" },
      { language: "Portuguese", fluency: "reading" }
    ]
  };

  urlConnections =
    "https://bio.torre.co/api/people/davidgiraldobueno/connections?";
  apiKey = ""; // <-- Enter your own key here!

  get connections() {
    return [...this._connections];
  }

  get bio() {
    return this._bio;
  }

  constructor(private http: HttpClient) {}

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred:", error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError("Something bad happened; please try again later.");
  }

  getConnection(id: string) {
    return { ...this._connections.find(p => p.person.id === id) };
  }

  getList(): Observable<any> {
    return this.http
      .get<any>(this.urlConnections)
      .pipe(retry(2), catchError(this.handleError));
  }

  getConnections(): Observable<any> {
    return this.http.get(`${this.urlConnections}`);
  }
}
