import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools, persist } from "zustand/middleware";

interface State {
  course: string;
  description: string;
  duration: string;
  tutor: string;
  credit: number;
  user: string;
  chapters: Chapter[];
  image: string;
}

export interface Chapter {
  chapter: string;
  videoId?: string;
  videoTitle?: string;
  videoDescription?: string;
  id?: string;
  note?: string;
  summary?: string;

  description: string;
  query: string;
}

type Actions = {
  actions: {
    addEntry: (data: Omit<State, "credit" | "user">) => void;
    addSummary: (data: Chapter) => void;
    resetStore: () => void;
    deductCredit: () => void;
    addCredit: (credit: number) => void;
    addUser: (user: string) => void;
  };
};

export const useCoursesStore = create<State & Actions>()(
  devtools(
    persist(
      immer((set) => ({
        course: "",
        description: "",
        duration: "",
        tutor: "",
        credit: 0,
        chapters: [] as Chapter[],
        image: "",
        user: "",
        actions: {
          addEntry: (data: Omit<State, "credit" | "user">) => {
            set((state) => {
              state.course = data.course;
              state.description = data.description;
              state.duration = data.duration;
              state.chapters = data.chapters;
              state.image = data.image;
              state.tutor = data.tutor;
            });
          },
          resetStore: () => {
            set((state) => {
              state.course = "";
              state.description = "";
              state.duration = "";
              state.chapters = [];
              state.image = "";
              state.tutor = "";
            });
          },
          addSummary: (data: Chapter) => {
            set((state) => {
              //check for the id them update the chapter summary
              const chapterIndex = state.chapters.findIndex(
                (chapter) => chapter.id === data.id
              );
              state.chapters[chapterIndex].summary = data.summary;
            });
          },
          deductCredit: () => {
            set((state) => {
              state.credit -= 1;
            });
          },
          addCredit: (credit: number) => {
            set((state) => {
              state.credit += credit;
            });
          },
          addUser: (user: string) => {
            set((state) => {
              state.user = user;
            });
          },
        },
      })),
      {
        name: "course-store",
        partialize: ({ chapters, description, duration, course, image }) => ({
          chapters,
          description,
          duration,
          course,
          image,
        }),
      }
    )
  )
);
