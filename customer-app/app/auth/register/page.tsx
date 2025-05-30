"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Eye, EyeOff, Mail, User, Phone, Lock } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Checkbox } from "@/components/ui/checkbox"

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    terms: false,
  })
  const [passwordStrength, setPasswordStrength] = useState(0)
  const [passwordFeedback, setPasswordFeedback] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })

    if (name === "password") {
      // Simple password strength checker
      let strength = 0
      if (value.length >= 8) strength += 1
      if (/[A-Z]/.test(value)) strength += 1
      if (/[0-9]/.test(value)) strength += 1
      if (/[^A-Za-z0-9]/.test(value)) strength += 1

      setPasswordStrength(strength)

      if (strength === 0) setPasswordFeedback("Zayıf şifre")
      else if (strength === 1) setPasswordFeedback("Orta şifre")
      else if (strength === 2) setPasswordFeedback("İyi şifre")
      else if (strength === 3) setPasswordFeedback("Güçlü şifre")
      else setPasswordFeedback("Çok güçlü şifre")
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      // Handle registration logic here
    }, 1500)
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header */}
      <header className="container flex items-center h-16 px-4">
        <Link
          href="/"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
        >
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-1 container px-4 py-6 flex flex-col items-center justify-center">
        <motion.div
          className="w-full max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-8">
            <motion.h1
              className="text-3xl font-bold text-gray-900 mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              OtoServis'e Hoş Geldiniz
            </motion.h1>
            <motion.p
              className="text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Yeni bir hesap oluşturun
            </motion.p>
          </div>

          <Card className="border-none shadow-lg">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl text-center">Kayıt Ol</CardTitle>
              <CardDescription className="text-center">Kişisel bilgilerinizi girin</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-sm font-medium">
                        Ad
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <Input
                          id="firstName"
                          name="firstName"
                          className="pl-10 bg-gray-50 border-gray-200 focus:bg-white transition-colors"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-sm font-medium">
                        Soyad
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <Input
                          id="lastName"
                          name="lastName"
                          className="pl-10 bg-gray-50 border-gray-200 focus:bg-white transition-colors"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">
                      E-posta
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="ornek@email.com"
                        className="pl-10 bg-gray-50 border-gray-200 focus:bg-white transition-colors"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium">
                      Telefon
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+90"
                        className="pl-10 bg-gray-50 border-gray-200 focus:bg-white transition-colors"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-sm font-medium">
                      Şifre
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        className="pl-10 pr-10 bg-gray-50 border-gray-200 focus:bg-white transition-colors"
                        value={formData.password}
                        onChange={handleChange}
                        required
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                    {formData.password && (
                      <div className="mt-2">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="h-1 flex-1 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className={`h-full ${
                                passwordStrength === 0
                                  ? "bg-red-500"
                                  : passwordStrength === 1
                                    ? "bg-orange-500"
                                    : passwordStrength === 2
                                      ? "bg-yellow-500"
                                      : passwordStrength === 3
                                        ? "bg-green-500"
                                        : "bg-green-600"
                              }`}
                              style={{ width: `${(passwordStrength / 4) * 100}%` }}
                            ></div>
                          </div>
                          <span className="text-xs text-gray-500">{passwordFeedback}</span>
                        </div>
                        <p className="text-xs text-gray-500">
                          Şifreniz en az 8 karakter uzunluğunda olmalı ve en az bir büyük harf, bir küçük harf ve bir
                          rakam içermelidir.
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword" className="text-sm font-medium">
                      Şifre Tekrar
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        className="pl-10 pr-10 bg-gray-50 border-gray-200 focus:bg-white transition-colors"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                    {formData.password &&
                      formData.confirmPassword &&
                      formData.password !== formData.confirmPassword && (
                        <p className="text-xs text-red-500 mt-1">Şifreler eşleşmiyor</p>
                      )}
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="terms"
                      name="terms"
                      checked={formData.terms}
                      onCheckedChange={(checked) => setFormData({ ...formData, terms: checked as boolean })}
                      required
                    />
                    <label htmlFor="terms" className="text-sm text-gray-600 cursor-pointer">
                      <span>
                        <Link href="/terms" className="text-blue-600 hover:underline">
                          Kullanım koşullarını
                        </Link>{" "}
                        ve{" "}
                        <Link href="/privacy" className="text-blue-600 hover:underline">
                          gizlilik politikasını
                        </Link>{" "}
                        kabul ediyorum
                      </span>
                    </label>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-md transition-colors"
                    disabled={isLoading || !formData.terms || formData.password !== formData.confirmPassword}
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Kayıt Yapılıyor...
                      </div>
                    ) : (
                      "Kayıt Ol"
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4 pt-0">
              <div className="relative w-full">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="bg-white px-2 text-gray-500">veya</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 w-full">
                <Button
                  variant="outline"
                  className="w-full bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                  Google
                </Button>
                <Button
                  variant="outline"
                  className="w-full bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                  Apple
                </Button>
              </div>

              <div className="text-center text-sm pt-2">
                <span className="text-gray-600">Zaten hesabınız var mı? </span>
                <Link
                  href="/auth/login"
                  className="text-blue-600 font-medium hover:text-blue-800 hover:underline transition-colors"
                >
                  Giriş Yapın
                </Link>
              </div>
            </CardFooter>
          </Card>
        </motion.div>
      </main>

      {/* Footer with branding */}
      <footer className="py-6 text-center text-sm text-gray-500">
        <p>© 2023 OtoServis. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  )
}
