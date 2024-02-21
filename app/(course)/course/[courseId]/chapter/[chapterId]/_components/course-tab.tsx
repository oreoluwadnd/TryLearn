import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Editor from "./editor";

export function CourseTab() {
  return (
    <Tabs defaultValue="resources" className="w-full overflow-x-hidden">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="resources">Resources</TabsTrigger>
        <TabsTrigger value="transcript">Transcript</TabsTrigger>
        <TabsTrigger value="note">Note</TabsTrigger>
      </TabsList>
      <TabsContent value="resources">
        <Card>
          <CardHeader>
            <CardTitle>Resources</CardTitle>
            <CardDescription>
              Download the resources for this chapter and the course you are in
              now
            </CardDescription>
          </CardHeader>
          <CardContent className="gap-3 grid grid-cols-1 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>How To: Dynamic Routing in Next.js</CardTitle>
                <CardDescription>
                  Learn how to implement dynamic routing in Next.js to create
                  flexible and scalable web applications. Create dynamic routes,
                  fetch data from an API, and explore advanced features like
                  catch-all and optional catch-all segments.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2"></CardContent>
              <CardFooter>
                <Button>Read Post</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>ChatGPT Prompts for Business Writers</CardTitle>
                <CardDescription>
                  Creators of the popular app Wunderlist have launched a new
                  to-do app called Superlist. It offers a clean design,
                  unlimited tasks, notes, and reminders, as well as a liberal
                  pricing structure. Superlist can be used on multiple
                  platforms, including Linux.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2"></CardContent>
              <CardFooter>
                <Button>Read Post</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>
                  Maximizing Workforce Potential with the Power of AI
                </CardTitle>
                <CardDescription>
                  Discover the transformative power of AI in maximizing
                  workforce potential. Learn about AI&rsquo;s role in
                  recruitment, employee training and development, performance
                  management, and decision-making processes. Explore the
                  benefits and challenges of AI adoption
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2"></CardContent>
              <CardFooter>
                <Button>Read Post</Button>
              </CardFooter>
            </Card>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="transcript">
        <Card>
          <CardHeader>
            <CardTitle>Transcript</CardTitle>
            <CardDescription>
              Transcript of the video you are watching now and the progress of
              it
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2"></CardContent>
          {/* <CardFooter>
            <Button>Save password</Button>
          </CardFooter> */}
        </Card>
      </TabsContent>
      <TabsContent value="note">
        <Card>
          <CardHeader>
            <CardTitle>Note</CardTitle>
            <CardDescription className=" ">
              Take lecture notes as you learn
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Editor />
          </CardContent>
          <CardFooter>
            <Button>Save</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
