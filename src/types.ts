export interface Subsection {
  id: string;
  title: string;
  path?: string;
}

export interface Section {
  id: string;
  title: string;
  subsections: Subsection[];
}
