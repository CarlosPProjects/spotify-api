'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

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

  function onSubmit(data: z.infer<typeof filterSchema>) {
    console.log(data);
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
                defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select filter" />
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