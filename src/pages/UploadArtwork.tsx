import React, { useState } from 'react';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
  import { Button } from '@/components/ui/button';
  import { Calendar } from "@/components/ui/calendar"
  import { useForm, SubmitHandler, Controller } from "react-hook-form";
  import { DevTool } from "@hookform/devtools";
  import axios from 'axios';

  type FormData = {
    title: string;
    artwork: FileList;
    description: string;
    category: string;
    date: Date;
  };

const UploadArtwork: React.FC = () => {

  const [preview, setPreview] = useState<string | null>(null);

  const { register, handleSubmit, control } = useForm<FormData>();

  const [selectedDate, setSelectedDate] = useState<Date | undefined>();

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    if (file) {
      setPreview(URL.createObjectURL(file));
    } else {
      setPreview(null);
    }
  };

  // const handleSubmit = (event: React.FormEvent) => {
  //   event.preventDefault();
  //   // Handle form submission (e.g., send data to backend)
  //   console.log({ title, description, date, category, image });
  // };

  const onSubmit: SubmitHandler<FormData> = async (data) => {

    const formData = new FormData();

    formData.append("title", data.title);
    formData.append("artwork", data.artwork[0]);
    formData.append("description", data.description);
    formData.append("category", data.category);
    if (data.date) {
      formData.append("date", data.date.toISOString());
    }

    console.log(data);

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3YWYyYmM2ZmVmOWM0MmE1MTMyMDYxOCIsInJvbGUiOiJhcnRpc3QiLCJpYXQiOjE3Mzk2MTgxNjYsImV4cCI6MTc0MjIxMDE2Nn0.VZUGF1S90zJa6Skdbaf2M9YE39RO2Ji2IRvPzj_5znY";

    let newUrl = "http://localhost:5000";
    newUrl += "/api/artworks";
    const response = await axios.post(newUrl, formData, {headers:{Authorization:token}});
    console.log(response.data)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-[#121212] p-6">
      <div className="w-full max-w-2xl bg-white dark:bg-[#1E1E1E] rounded-lg shadow-lg p-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-gray-100 text-center mb-4">
          Upload Artwork
        </h2>
        <DevTool control={control} />
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
          {/* Title */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-medium">Title</label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg bg-gray-100 dark:bg-[#181818] dark:text-white"
              placeholder="Enter artwork title"
              {...register("title", { required: true })}
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-medium">Upload Artwork</label>
            <input
              type="file"
              accept="image/*"
              className="w-full p-2 border rounded-lg bg-gray-100 dark:bg-[#181818] dark:text-white"
              {...register("artwork", { required: true, onChange: handleImageChange })}
            />
          </div>

          {/* Image Preview */}
          {preview && (
            <div className="mt-4">
              <img src={preview} alt="Artwork Preview" className="w-full h-60 object-cover rounded-lg shadow-md" />
            </div>
          )}

          {/* Description */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-medium">Description</label>
            <textarea
              className="w-full p-3 border rounded-lg bg-gray-100 dark:bg-[#181818] dark:text-white"
              placeholder="Write a short description"
              {...register("description", { required: true })}
            ></textarea>
          </div>

          {/* Category */}
          <div>
          <Controller
            name="category"
            control={control}
            rules={{ required: "Category is required" }}
            render={({ field }) => (
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger className="pl-4 py-6 bg-gray-100 dark:bg-[#181818] text-md dark:focus:ring-2 focus:ring-gray-500">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="painting">Painting</SelectItem>
                  <SelectItem value="sculpture">Sculpture</SelectItem>
                  <SelectItem value="photography">Photography</SelectItem>
                  <SelectItem value="digital">Digital Art</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
          </div>

          {/* Date */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-medium">Date</label>
            <Popover>
            <PopoverTrigger className='w-full py-6 bg-gray-100 dark:bg-[#181818]' asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "max-w-[240px] pl-3 text-left font-normal",
                    !selectedDate && "text-muted-foreground"
                  )}
                >
                  {selectedDate ? (
                    format(selectedDate, "PPP")
                  ) : (
                    <span>Pick a date</span>
                  )}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
            <Controller
              control={control}
              name="date"
              rules={{ required: true }}
              render={({ field }) => (
                <Calendar
                  mode="single"
                  selected={field.value}
                  onSelect={(date) => {
                    setSelectedDate(date);
                    field.onChange(date);
                  }}
                  disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
                  className="rounded-md border"
                />
              )}
            />
            </PopoverContent>
            </Popover>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold text-lg hover:opacity-90 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-300 transition select-none"
          >
            Upload
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadArtwork;
