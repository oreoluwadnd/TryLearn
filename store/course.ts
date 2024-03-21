import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { PersistStorage, devtools, persist } from "zustand/middleware";

interface State {
  course: string;
  description: string;
  duration: string;
  chapters: Chapter[];
  image: string;
}

interface Chapter {
  chapter: string;
  video?: string;
  id?: string;
  blog?: Blog;
  description: string;
  query: string;
}
interface Blog {
  title: string;
  content: string;
  id: string;
}

type Actions = {
  actions: {
    addEntry: (data: State) => void;
    resetStore: () => void;
  };
};

export const useCoursesStore = create<State & Actions>()(
  devtools(
    persist(
      immer((set) => ({
        course: "",
        description: "",
        duration: "",
        chapters: [] as Chapter[], // Fix the type of chapters
        image: "",
        actions: {
          addEntry: (data: State) => {
            set((state) => {
              state.course = data.course;
              state.description = data.description;
              state.duration = data.duration;
              state.chapters = data.chapters;
              state.image = data.image;
            });
          },
          resetStore: () => {
            set((state) => {
              state.course = "";
              state.description = "";
              state.duration = "";
              state.chapters = [];
              state.image = "";
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
