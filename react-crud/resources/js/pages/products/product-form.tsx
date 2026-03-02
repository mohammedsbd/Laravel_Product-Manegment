import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function ProductForm() {
  return (
    <div className="flex justify-center p-6">
      <Card className="w-full max-w-2xl shadow-lg rounded-2xl">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">
            Create Product
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          
          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name">Product Name</Label>
            <Input id="name" placeholder="Enter product name" />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Enter product description"
              className="min-h-[100px]"
            />
          </div>

          {/* Price */}
          <div className="space-y-2">
            <Label htmlFor="price">Price</Label>
            <Input id="price" type="number" placeholder="Enter price" />
          </div>

          {/* Featured Image */}
          <div className="space-y-2">
            <Label htmlFor="image">Featured Image</Label>
            <Input id="image" type="file" />
          </div>

          {/* Created Date */}
          <div className="space-y-2">
            <Label htmlFor="date">Created Date</Label>
            <Input id="date" type="date" />
          </div>

          {/* Submit Button */}
          <Button className="w-full">
            Create Product
          </Button>

        </CardContent>
      </Card>
    </div>
  )
}