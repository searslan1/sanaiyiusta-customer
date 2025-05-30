import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, MessageSquare } from "lucide-react"
import Link from "next/link"

export default function TeklifConfirmationPage() {
  return (
    <div className="container px-4 py-6 pb-20">
      <div className="flex flex-col items-center text-center mb-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900">Teklif İsteğiniz Gönderildi!</h1>
        <p className="text-gray-600 mt-2">
          Teklif isteğiniz başarıyla oluşturuldu. Yakındaki ustalar talebinizi inceleyecek ve size teklif gönderecekler.
        </p>
      </div>

      <Card className="mb-6">
        <CardContent className="p-4">
          <h3 className="font-medium text-gray-900 mb-4">Teklif Detayları</h3>

          <div className="space-y-3">
            <div>
              <p className="text-xs text-gray-500">Teklif Numarası</p>
              <p className="text-sm font-medium">TK-2023-007</p>
            </div>

            <div>
              <p className="text-xs text-gray-500">Servis Tipi</p>
              <p className="text-sm font-medium">Motor Yağı Değişimi</p>
            </div>

            <div>
              <p className="text-xs text-gray-500">Araç</p>
              <p className="text-sm font-medium">Volkswagen Golf (34 ABC 123)</p>
            </div>

            <div>
              <p className="text-xs text-gray-500">Aciliyet</p>
              <p className="text-sm font-medium">Normal (1-3 gün)</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <Link href="/teklif-ver/TK-2023-007">
          <Button className="w-full flex items-center justify-center">
            Teklif Detaylarını Görüntüle
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>

        <Link href="/teklif-ver">
          <Button variant="outline" className="w-full">
            Tüm Tekliflerim
          </Button>
        </Link>
      </div>

      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start">
          <MessageSquare className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
          <div>
            <h4 className="font-medium text-blue-800">Bir sonraki adım</h4>
            <p className="text-sm text-blue-700 mt-1">
              Ustalar talebinizi inceleyip size teklif gönderecekler. Bildirimler ve mesajlar bölümünden teklifleri
              takip edebilirsiniz.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
