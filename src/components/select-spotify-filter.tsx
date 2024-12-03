'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import SoundWave from "./sound-wave"
import { getCurrentUserPlayLists, getCurrentUserSavedTracks } from "@/actions/spotify"
import { getUserAccessToken } from "@/actions/auth"

const filterSchema = z.object({
  filter: z
    .string({
      required_error: "Please select a filter",
    })
})

const SelectSpotifyFilter = () => {

  const form = useForm<z.infer<typeof filterSchema>>({
    resolver: zodResolver(filterSchema),
  })

  async function onSubmit(data: z.infer<typeof filterSchema>) {
    const accessToken = await getUserAccessToken()
    if (!accessToken) return;
    console.log(accessToken);
    const res = await getCurrentUserSavedTracks(accessToken)
    console.log(res);
  }

  return (
    <Form {...form}>
      <form>
        <FormField
          control={form.control}
          name="filter"
          render={({ field }) => (
            <FormItem>
              <Select
                onValueChange={(value) => {
                  field.onChange(value);
                  form.handleSubmit(onSubmit)();
                }}
                defaultValue={field.value}
              >
                <FormControl className="border-none shadow-none font-semibold">
                  <SelectTrigger className="gap-2">
                    <>
                      <SoundWave />
                      <SelectValue placeholder="Filter" />
                    </>
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="tracks">Top Tracks</SelectItem>
                  <SelectItem value="playlists">My Playlists</SelectItem>
                  <SelectItem value="artists">Top Artists</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}

export default SelectSpotifyFilter