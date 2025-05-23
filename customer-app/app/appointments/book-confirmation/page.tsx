import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Calendar, Clock, MapPin, Car } from "lucide-react"
import Link from "next/link"

export default function BookAppointmentConfirmationPage() {
  return (
    <div className="container px-4 py-6 pb-20">
      <div className="flex flex-col items-center text-center mb-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900">Randevu Oluşturuldu!</h1>
        <p className="text-gray-600 mt-2">
          Randevu talebiniz başarıyla alındı. Ustanız tarafından onaylandığında size bildirim gönderilecektir.
        </p>
      </div>

      <Card className="mb-6">
        <CardContent className="p-4">
          <h3 className="font-medium text-gray-900 mb-4">Randevu Detayları</h3>

          <div className="space-y-3">
            <div>
              <p className="text-xs text-gray-500">Randevu Numarası</p>
              <p className="text-sm font-medium">APT-2023-046</p>
            </div>

            <div>
              <p className="text-xs text-gray-500">Servis</p>
              <p className="text-sm font-medium">Motor Bakımı</p>
            </div>

            <div className="flex items-center">
              <Calendar className="w-4 h-4 text-gray-500 mr-2" />
              <div>
                <p className="text-xs text-gray-500">Tarih ve Saat</p>
                <p className="text-sm font-medium">28 Mayıs 2023, 10:00</p>
              </div>
            </div>

            <div className="flex items-center">
              <MapPin className="w-4 h-4 text-gray-500 mr-2" />
              <div>
                <p className="text-xs text-gray-500">Konum</p>
                <p className="text-sm font-medium">Acıbadem Otomotiv, Kadıköy, İstanbul</p>
              </div>
            </div>

            <div className="flex items-center">
              <Car className="w-4 h-4 text-gray-500 mr-2" />
              <div>
                <p className="text-xs text-gray-500">Araç</p>
                <p className="text-sm font-medium">Volkswagen Golf (34 ABC 123)</p>
              </div>
            </div>

            <div>
              <p className="text-xs text-gray-500">Usta</p>
              <p className="text-sm font-medium">Mehmet Usta</p>
            </div>

            <div>
              <p className="text-xs text-gray-500">Durum</p>
              <p className="text-sm font-medium text-yellow-600">Onay Bekliyor</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <Link href="/appointments">
          <Button className="w-full flex items-center justify-center">
            Randevularıma Dön
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>

        <Link href="/appointments/book">
          <Button variant="outline" className="w-full flex items-center justify-center">
            <Calendar className="w-4 h-4 mr-2" />
            Başka Randevu Oluştur
          </Button>
        </Link>
      </div>

      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start">
          <Clock className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
          <div>
            <h4 className="font-medium text-blue-800">Randevu Hatırlatması</h4>
            <p className="text-sm text-blue-700 mt-1">
              Randevunuzdan 24 saat önce size bir hatırlatma bildirimi gönderilecektir.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
