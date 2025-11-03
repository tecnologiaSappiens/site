"use client"

import { useState, Fragment } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Users, BookOpen, TrendingUp, TrendingDown, Clock, Award, Flame, Target, Activity, BarChart3, CalendarIcon, ChevronDown, ChevronRight, ArrowUpDown, ArrowUp, ArrowDown, Search, X, Trophy, Download, ChevronLeft } from "lucide-react";

import { BackToTop } from "@/components/BackToTop";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import * as XLSX from 'xlsx';

// Mock data
const studyMomentsHourly = [
  { hour: "6h", sessions: 12, avgTime: 18 },
  { hour: "9h", sessions: 35, avgTime: 24 },
  { hour: "12h", sessions: 28, avgTime: 20 },
  { hour: "15h", sessions: 42, avgTime: 26 },
  { hour: "18h", sessions: 55, avgTime: 28 },
  { hour: "21h", sessions: 48, avgTime: 22 },
  { hour: "0h", sessions: 15, avgTime: 15 },
];

const studyMomentsWeekly = [
  { day: "Seg", sessions: 45, avgTime: 22 },
  { day: "Ter", sessions: 52, avgTime: 25 },
  { day: "Qua", sessions: 48, avgTime: 20 },
  { day: "Qui", sessions: 61, avgTime: 28 },
  { day: "Sex", sessions: 55, avgTime: 24 },
  { day: "Sáb", sessions: 38, avgTime: 18 },
  { day: "Dom", sessions: 42, avgTime: 19 },
];

const studyMomentsMonthly = [
  { day: "1", sessions: 42, avgTime: 20 },
  { day: "2", sessions: 38, avgTime: 18 },
  { day: "3", sessions: 45, avgTime: 22 },
  { day: "4", sessions: 52, avgTime: 25 },
  { day: "5", sessions: 48, avgTime: 23 },
  { day: "6", sessions: 35, avgTime: 19 },
  { day: "7", sessions: 32, avgTime: 17 },
  { day: "8", sessions: 50, avgTime: 24 },
  { day: "9", sessions: 55, avgTime: 26 },
  { day: "10", sessions: 58, avgTime: 27 },
  { day: "11", sessions: 61, avgTime: 28 },
  { day: "12", sessions: 54, avgTime: 25 },
  { day: "13", sessions: 48, avgTime: 23 },
  { day: "14", sessions: 40, avgTime: 21 },
  { day: "15", sessions: 52, avgTime: 24 },
  { day: "16", sessions: 57, avgTime: 26 },
  { day: "17", sessions: 60, avgTime: 27 },
  { day: "18", sessions: 55, avgTime: 25 },
  { day: "19", sessions: 51, avgTime: 24 },
  { day: "20", sessions: 46, avgTime: 22 },
  { day: "21", sessions: 38, avgTime: 20 },
  { day: "22", sessions: 49, avgTime: 23 },
  { day: "23", sessions: 53, avgTime: 24 },
  { day: "24", sessions: 58, avgTime: 26 },
  { day: "25", sessions: 62, avgTime: 28 },
  { day: "26", sessions: 56, avgTime: 26 },
  { day: "27", sessions: 50, avgTime: 24 },
  { day: "28", sessions: 44, avgTime: 22 },
  { day: "29", sessions: 41, avgTime: 21 },
  { day: "30", sessions: 47, avgTime: 23 },
  { day: "31", sessions: 52, avgTime: 25 },
];

const topStudentsRanking = [
  { name: "Maria Silva", accuracy: 92, errors: 8, streak: 15, flashcards: 450, active: true },
  { name: "João Santos", accuracy: 88, errors: 12, streak: 12, flashcards: 420, active: true },
  { name: "Ana Costa", accuracy: 90, errors: 10, streak: 10, flashcards: 380, active: true },
  { name: "Pedro Oliveira", accuracy: 85, errors: 15, streak: 8, flashcards: 350, active: true },
  { name: "Carla Lima", accuracy: 87, errors: 13, streak: 7, flashcards: 340, active: false },
];

const flashcardPerformance = [
  { 
    id: "anatomia",
    name: "Anatomia Básica", 
    totalStudied: 2850, 
    accuracy: 82, 
    avgTime: "18min",
    totalTime: "855h 30min",
    subdecks: [
      { name: "Sistema Esquelético", totalStudied: 950, accuracy: 85, avgTime: "17min", totalTime: "269h 10min" },
      { name: "Sistema Muscular", totalStudied: 900, accuracy: 80, avgTime: "18min", totalTime: "270h" },
      { name: "Sistema Nervoso", totalStudied: 1000, accuracy: 83, avgTime: "19min", totalTime: "316h 40min" },
    ]
  },
  { 
    id: "farmacologia",
    name: "Farmacologia", 
    totalStudied: 2420, 
    accuracy: 85, 
    avgTime: "22min",
    totalTime: "887h 20min",
    subdecks: [
      { name: "Antibióticos", totalStudied: 890, accuracy: 87, avgTime: "21min", totalTime: "311h 30min" },
      { name: "Anti-inflamatórios", totalStudied: 820, accuracy: 84, avgTime: "22min", totalTime: "300h 40min" },
      { name: "Analgésicos", totalStudied: 710, accuracy: 86, avgTime: "23min", totalTime: "272h 10min" },
    ]
  },
  { 
    id: "fisiologia",
    name: "Fisiologia", 
    totalStudied: 2180, 
    accuracy: 78, 
    avgTime: "20min",
    totalTime: "726h 40min",
    subdecks: [
      { name: "Fisiologia Cardiovascular", totalStudied: 1100, accuracy: 76, avgTime: "19min", totalTime: "348h 20min" },
      { name: "Fisiologia Respiratória", totalStudied: 1080, accuracy: 80, avgTime: "21min", totalTime: "378h" },
    ]
  },
  { 
    id: "patologia",
    name: "Patologia", 
    totalStudied: 1950, 
    accuracy: 80, 
    avgTime: "19min",
    totalTime: "617h 30min",
    subdecks: [
      { name: "Patologia Geral", totalStudied: 1000, accuracy: 78, avgTime: "18min", totalTime: "300h" },
      { name: "Patologia Sistêmica", totalStudied: 950, accuracy: 82, avgTime: "20min", totalTime: "316h 40min" },
    ]
  },
];

const studentsFlashcardsRanking = [
  { name: "Maria Silva", flashcards: 450, sessions: 32, accuracy: 92, avgTime: "26min", totalTime: "13h 52min" },
  { name: "João Santos", flashcards: 420, sessions: 28, accuracy: 88, avgTime: "28min", totalTime: "13h 20min" },
  { name: "Ana Costa", flashcards: 380, sessions: 25, accuracy: 90, avgTime: "25min", totalTime: "10h 25min" },
  { name: "Pedro Oliveira", flashcards: 350, sessions: 24, accuracy: 85, avgTime: "24min", totalTime: "9h 36min" },
  { name: "Carla Lima", flashcards: 340, sessions: 22, accuracy: 87, avgTime: "23min", totalTime: "8h 26min" },
];

const studentsTimeRanking = [
  { name: "João Santos", avgTime: "28min", totalTime: "13h 20min", sessions: 28 },
  { name: "Maria Silva", avgTime: "26min", totalTime: "13h 52min", sessions: 32 },
  { name: "Ana Costa", avgTime: "25min", totalTime: "10h 25min", sessions: 25 },
  { name: "Pedro Oliveira", avgTime: "24min", totalTime: "9h 36min", sessions: 24 },
  { name: "Carla Lima", avgTime: "23min", totalTime: "8h 26min", sessions: 22 },
];

const productMetrics = [
  { 
    id: "anatomia",
    name: "Anatomia Básica", 
    activeStudents: 85, 
    completion: 78, 
    accuracy: 82, 
    mostAccessed: 145, 
    leastAccessed: 12,
    subdecks: [
      { name: "Sistema Esquelético", activeStudents: 82, completion: 80, accuracy: 85, mostAccessed: 95, leastAccessed: 8 },
      { name: "Sistema Muscular", activeStudents: 78, completion: 75, accuracy: 80, mostAccessed: 88, leastAccessed: 6 },
      { name: "Sistema Nervoso", activeStudents: 85, completion: 78, accuracy: 83, mostAccessed: 102, leastAccessed: 10 },
    ]
  },
  { 
    id: "fisiologia",
    name: "Fisiologia", 
    activeStudents: 78, 
    completion: 72, 
    accuracy: 78, 
    mostAccessed: 132, 
    leastAccessed: 8,
    subdecks: [
      { name: "Fisiologia Cardiovascular", activeStudents: 75, completion: 70, accuracy: 76, mostAccessed: 85, leastAccessed: 5 },
      { name: "Fisiologia Respiratória", activeStudents: 80, completion: 74, accuracy: 80, mostAccessed: 90, leastAccessed: 7 },
    ]
  },
  { 
    id: "farmacologia",
    name: "Farmacologia", 
    activeStudents: 92, 
    completion: 85, 
    accuracy: 85, 
    mostAccessed: 98, 
    leastAccessed: 5,
    subdecks: [
      { name: "Antibióticos", activeStudents: 90, completion: 88, accuracy: 87, mostAccessed: 75, leastAccessed: 4 },
      { name: "Anti-inflamatórios", activeStudents: 88, completion: 82, accuracy: 84, mostAccessed: 68, leastAccessed: 3 },
      { name: "Analgésicos", activeStudents: 91, completion: 86, accuracy: 86, mostAccessed: 80, leastAccessed: 5 },
    ]
  },
  { 
    id: "patologia",
    name: "Patologia", 
    activeStudents: 71, 
    completion: 68, 
    accuracy: 80, 
    mostAccessed: 87, 
    leastAccessed: 10,
    subdecks: [
      { name: "Patologia Geral", activeStudents: 70, completion: 65, accuracy: 78, mostAccessed: 60, leastAccessed: 8 },
      { name: "Patologia Sistêmica", activeStudents: 72, completion: 70, accuracy: 82, mostAccessed: 65, leastAccessed: 9 },
    ]
  },
];

const Dashboards = () => {
  const [periodFilter, setPeriodFilter] = useState("");
  const [productFilter, setProductFilter] = useState("all");
  const [userFilter, setUserFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [expandedProducts, setExpandedProducts] = useState<Set<string>>(new Set());
  const [expandedSessionFlashcards, setExpandedSessionFlashcards] = useState<Set<string>>(new Set());
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' | null }>({ key: '', direction: null });
  const [sortConfigFlashcardPerf, setSortConfigFlashcardPerf] = useState<{ key: string; direction: 'asc' | 'desc' | null }>({ key: '', direction: null });
  const [sortConfigStudentsFlashcards, setSortConfigStudentsFlashcards] = useState<{ key: string; direction: 'asc' | 'desc' | null }>({ key: '', direction: null });
  const [sortConfigStudentsTime, setSortConfigStudentsTime] = useState<{ key: string; direction: 'asc' | 'desc' | null }>({ key: '', direction: null });
  const [sessionViewType, setSessionViewType] = useState<"hour" | "week" | "month">("hour");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const clearAllFilters = () => {
    setPeriodFilter("");
    setProductFilter("all");
    setUserFilter("all");
    setSearchTerm("");
    setStartDate(undefined);
    setEndDate(undefined);
  };

  const hasActiveFilters = periodFilter !== "" || productFilter !== "all" || userFilter !== "all" || searchTerm !== "" || startDate || endDate;

  // Filter data based on selected filters
  const getFilteredProducts = () => {
    let filtered = productMetrics;
    
    // Filter by product dropdown
    if (productFilter !== "all") {
      filtered = filtered.filter(p => p.id === productFilter);
    }
    
    // Filter by search term
    if (searchTerm.trim() !== "") {
      const search = searchTerm.toLowerCase();
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(search)
      );
    }
    
    return filtered;
  };

  const getFilteredStudents = () => {
    let filtered = topStudentsRanking;
    if (userFilter === "active") {
      filtered = filtered.filter(s => s.active);
    } else if (userFilter === "inactive") {
      filtered = filtered.filter(s => !s.active);
    }
    return filtered;
  };

  // Calculate metrics based on filtered data
  const calculateMetrics = () => {
    const filteredProducts = getFilteredProducts();
    const filteredStudents = getFilteredStudents();
    
    // Calculate active students based on product filter
    let activeStudentsPercentage = "0,0";
    let totalActiveStudents = 0;
    let totalStudents = 0;
    
    if (productFilter === "all") {
      // When showing all products, use average of all products' active students
      totalActiveStudents = filteredProducts.reduce((sum, p) => sum + p.activeStudents, 0);
      totalStudents = filteredProducts.length * 100; // Assuming 100 students per product for percentage calculation
      activeStudentsPercentage = filteredProducts.length > 0
        ? (filteredProducts.reduce((sum, p) => sum + p.activeStudents, 0) / filteredProducts.length).toFixed(1).replace('.', ',')
        : "0,0";
    } else {
      // When filtering by specific product, use that product's active students
      const selectedProduct = filteredProducts[0];
      if (selectedProduct) {
        activeStudentsPercentage = selectedProduct.activeStudents.toFixed(1).replace('.', ',');
        totalActiveStudents = Math.round(selectedProduct.activeStudents); // Simulating count
        totalStudents = 100; // Simulating total
      }
    }
    
    const avgCompletion = filteredProducts.length > 0
      ? (filteredProducts.reduce((sum, p) => sum + p.completion, 0) / filteredProducts.length).toFixed(1).replace('.', ',')
      : "0,0";
    
    const avgAccuracy = filteredProducts.length > 0
      ? (filteredProducts.reduce((sum, p) => sum + p.accuracy, 0) / filteredProducts.length).toFixed(1).replace('.', ',')
      : "0,0";
    
    const avgStreak = filteredStudents.length > 0
      ? Math.round(filteredStudents.reduce((sum, s) => sum + s.streak, 0) / filteredStudents.length)
      : 0;
    
    return {
      activeStudentsPercentage,
      activeStudentsCount: totalActiveStudents,
      totalStudents,
      avgCompletion,
      avgAccuracy,
      avgStreak,
    };
  };

  const metrics = calculateMetrics();

  // Generate learning evolution data based on period filter
  const getLearningEvolutionData = () => {
    const daysMap: Record<string, number> = {
      today: 1,
      week: 7,
      month: 30,
      quarter: 90,
      year: 365,
    };
    
    let days = daysMap[periodFilter] || 7;
    let endDateToUse = endDate || new Date();
    let startDateToUse = startDate;
    
    // If custom date range is set, use it
    if (startDate && endDate) {
      const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
      days = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
      startDateToUse = startDate;
    } else {
      // Calculate start date based on period filter
      startDateToUse = new Date(endDateToUse);
      startDateToUse.setDate(startDateToUse.getDate() - (days - 1));
    }
    
    const data = [];
    
    // Generate daily data with progressive accuracy improvement
    for (let i = 0; i < days; i++) {
      const currentDate = new Date(startDateToUse);
      currentDate.setDate(startDateToUse.getDate() + i);
      
      const baseAccuracy = 75;
      const improvement = (i / days) * 15; // Gradual improvement up to 15%
      const randomVariation = Math.random() * 3 - 1.5; // Small random variation
      const accuracy = Math.min(95, baseAccuracy + improvement + randomVariation);
      
      data.push({
        date: format(currentDate, "dd/MM"),
        fullDate: format(currentDate, "dd/MM/yyyy"),
        accuracy: Math.round(accuracy * 10) / 10,
      });
    }
    
    return data;
  };

  const toggleProduct = (productId: string) => {
    setExpandedProducts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(productId)) {
        newSet.delete(productId);
      } else {
        newSet.add(productId);
      }
      return newSet;
    });
  };

  const toggleSessionFlashcard = (flashcardId: string) => {
    setExpandedSessionFlashcards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(flashcardId)) {
        newSet.delete(flashcardId);
      } else {
        newSet.add(flashcardId);
      }
      return newSet;
    });
  };

  const handleSort = (key: string) => {
    let direction: 'asc' | 'desc' | null = 'asc';
    if (sortConfig.key === key) {
      if (sortConfig.direction === 'asc') direction = 'desc';
      else if (sortConfig.direction === 'desc') direction = null;
    }
    setSortConfig({ key, direction });
  };

  const handleSortFlashcardPerf = (key: string) => {
    let direction: 'asc' | 'desc' | null = 'asc';
    if (sortConfigFlashcardPerf.key === key) {
      if (sortConfigFlashcardPerf.direction === 'asc') direction = 'desc';
      else if (sortConfigFlashcardPerf.direction === 'desc') direction = null;
    }
    setSortConfigFlashcardPerf({ key, direction });
  };

  const handleSortStudentsFlashcards = (key: string) => {
    let direction: 'asc' | 'desc' | null = 'asc';
    if (sortConfigStudentsFlashcards.key === key) {
      if (sortConfigStudentsFlashcards.direction === 'asc') direction = 'desc';
      else if (sortConfigStudentsFlashcards.direction === 'desc') direction = null;
    }
    setSortConfigStudentsFlashcards({ key, direction });
  };

  const handleSortStudentsTime = (key: string) => {
    let direction: 'asc' | 'desc' | null = 'asc';
    if (sortConfigStudentsTime.key === key) {
      if (sortConfigStudentsTime.direction === 'asc') direction = 'desc';
      else if (sortConfigStudentsTime.direction === 'desc') direction = null;
    }
    setSortConfigStudentsTime({ key, direction });
  };

  const getSortedData = <T extends Record<string, any>>(data: T[], config: { key: string; direction: 'asc' | 'desc' | null }): T[] => {
    if (!config.direction || !config.key) return data;
    
    return [...data].sort((a, b) => {
      const aValue = a[config.key];
      const bValue = b[config.key];
      
      if (aValue === bValue) return 0;
      
      const comparison = aValue > bValue ? 1 : -1;
      return config.direction === 'asc' ? comparison : -comparison;
    });
  };

  const SortIcon = ({ columnKey, config }: { columnKey: string; config: { key: string; direction: 'asc' | 'desc' | null } }) => {
    if (config.key !== columnKey) {
      return <ArrowUpDown className="h-4 w-4 ml-1 text-muted-foreground" />;
    }
    if (config.direction === 'asc') {
      return <ArrowUp className="h-4 w-4 ml-1 text-primary" />;
    }
    if (config.direction === 'desc') {
      return <ArrowDown className="h-4 w-4 ml-1 text-primary" />;
    }
    return <ArrowUpDown className="h-4 w-4 ml-1 text-muted-foreground" />;
  };

  const exportToExcel = () => {
    const dataToExport = getSortedData(getFilteredStudents(), sortConfig).map((student) => ({
      'Aluno': student.name,
      'Status': student.active ? 'Ativo' : 'Inativo',
      'Streak': student.streak,
      'Flashcards/dia': 45,
      'Total Flashcards': student.flashcards,
      'Tempo Total': '8h 30min',
      'Tempo Médio': '22min',
      'Dias Estudo': 15,
      '% Acerto': student.accuracy
    }));

    const worksheet = XLSX.utils.json_to_sheet(dataToExport);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Estatísticas');
    
    // O navegador abrirá o dialog nativo para o usuário escolher o nome e local do arquivo
    XLSX.writeFile(workbook, 'estatisticas-alunos.xlsx');
  };

  const getPaginatedData = <T,>(data: T[]) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  };

  const getTotalPages = (dataLength: number) => {
    return Math.ceil(dataLength / itemsPerPage);
  };

  const FilterSection = () => (
    <div className="space-y-4 mb-6">
      {/* Search and Clear Filters Row */}
      <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
        <div className="relative flex-1 max-w-xl">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Buscar flashcards, usuários ou sessões..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full h-11 pl-10 pr-10 rounded-lg border border-input bg-background text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {hasActiveFilters && (
          <Button
            variant="outline"
            onClick={clearAllFilters}
            className="whitespace-nowrap h-11"
          >
            <X className="mr-2 h-4 w-4" />
            Limpar Filtros
          </Button>
        )}
      </div>

      {/* Filter Controls Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
        <Select value={periodFilter} onValueChange={(value) => {
          setPeriodFilter(value);
          setStartDate(undefined);
          setEndDate(undefined);
        }}>
          <SelectTrigger className="h-11">
            <SelectValue placeholder="Períodos pré estabelecidos" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="today">Hoje</SelectItem>
            <SelectItem value="week">Última semana</SelectItem>
            <SelectItem value="month">Último mês</SelectItem>
            <SelectItem value="quarter">Último trimestre</SelectItem>
            <SelectItem value="year">Último ano</SelectItem>
          </SelectContent>
        </Select>

        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "h-11 justify-start text-left font-normal",
                !startDate && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {startDate ? format(startDate, "dd/MM/yyyy") : "Data início"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={startDate}
              onSelect={(date) => {
                setStartDate(date);
                if (date) setPeriodFilter("");
              }}
              initialFocus
              className="pointer-events-auto"
            />
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "h-11 justify-start text-left font-normal",
                !endDate && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {endDate ? format(endDate, "dd/MM/yyyy") : "Data fim"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={endDate}
              onSelect={(date) => {
                setEndDate(date);
                if (date) setPeriodFilter("");
              }}
              initialFocus
              className="pointer-events-auto"
              disabled={(date) => startDate ? date < startDate : false}
            />
          </PopoverContent>
        </Popover>

        <Select value={productFilter} onValueChange={setProductFilter}>
          <SelectTrigger className="h-11">
            <SelectValue placeholder="Flashcard" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos os flashcards</SelectItem>
            <SelectItem value="anatomia">Anatomia Básica</SelectItem>
            <SelectItem value="fisiologia">Fisiologia</SelectItem>
            <SelectItem value="farmacologia">Farmacologia</SelectItem>
            <SelectItem value="patologia">Patologia</SelectItem>
          </SelectContent>
        </Select>

        <Select value={userFilter} onValueChange={setUserFilter}>
          <SelectTrigger className="h-11">
            <SelectValue placeholder="Usuário" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos os usuários</SelectItem>
            <SelectItem value="active">Apenas ativos</SelectItem>
            <SelectItem value="inactive">Inativos</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
            <BarChart3 className="h-10 w-10 text-primary" />
            Dashboard do Criador
          </h1>
          <p className="text-muted-foreground">
            Acompanhe todos os indicadores e evolução dos seus alunos
          </p>
        </div>

        {/* Tabs para diferentes seções */}
        <Tabs defaultValue="products" className="space-y-6">
          <TabsList className="grid w-full grid-cols-1 lg:grid-cols-3">
            <TabsTrigger value="products">Flashcards</TabsTrigger>
            <TabsTrigger value="sessions">Sessões de Estudo</TabsTrigger>
            <TabsTrigger value="users">Usuários</TabsTrigger>
          </TabsList>

          {/* PRODUTOS */}
          <TabsContent value="products" className="space-y-6">
            <FilterSection />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    % Alunos Ativos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary">{metrics.activeStudentsPercentage}%</div>
                  <p className="text-xs text-muted-foreground mt-1">{metrics.activeStudentsCount.toLocaleString('pt-BR')} de {metrics.totalStudents.toLocaleString('pt-BR')} alunos</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <Target className="h-4 w-4 text-primary" />
                    % Conclusão
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary">{metrics.avgCompletion}%</div>
                  <p className="text-xs text-muted-foreground mt-1">Taxa média de conclusão</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <Award className="h-4 w-4 text-primary" />
                    % Acerto
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary">{metrics.avgAccuracy}%</div>
                  <p className="text-xs text-muted-foreground mt-1">Média geral de acertos</p>
                </CardContent>
              </Card>
            </div>

            {/* Performance por Produto */}
            <Card>
              <CardHeader>
                <CardTitle>Performance por Flashcard</CardTitle>
                <CardDescription>Indicadores detalhados de cada deck</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>
                        <button 
                          onClick={() => handleSort('name')}
                          className="flex items-center hover:text-primary transition-colors"
                        >
                          Flashcard
                          <SortIcon columnKey="name" config={sortConfig} />
                        </button>
                      </TableHead>
                      <TableHead className="text-center">
                        <button 
                          onClick={() => handleSort('activeStudents')}
                          className="flex items-center justify-center w-full hover:text-primary transition-colors"
                        >
                          Alunos Ativos
                          <SortIcon columnKey="activeStudents" config={sortConfig} />
                        </button>
                      </TableHead>
                      <TableHead className="text-center">
                        <button 
                          onClick={() => handleSort('completion')}
                          className="flex items-center justify-center w-full hover:text-primary transition-colors"
                        >
                          % Conclusão
                          <SortIcon columnKey="completion" config={sortConfig} />
                        </button>
                      </TableHead>
                      <TableHead className="text-center">
                        <button 
                          onClick={() => handleSort('accuracy')}
                          className="flex items-center justify-center w-full hover:text-primary transition-colors"
                        >
                          % Acerto
                          <SortIcon columnKey="accuracy" config={sortConfig} />
                        </button>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {getSortedData(getFilteredProducts(), sortConfig).map((product, index) => (
                      <Fragment
                        key={product.id}
                      >
                        <TableRow 
                          className="cursor-pointer hover:bg-muted/50"
                          onClick={() => toggleProduct(product.id)}
                        >
                          <TableCell className="font-medium">
                            <div className="flex items-center gap-2">
                              {expandedProducts.has(product.id) ? (
                                <ChevronDown className="h-4 w-4 text-muted-foreground" />
                              ) : (
                                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                              )}
                              {product.name}
                              <Badge variant="outline" className="ml-2 text-xs">
                                {product.subdecks.length}
                              </Badge>
                            </div>
                          </TableCell>
                          <TableCell className="text-center">
                            <Badge variant="secondary">{product.activeStudents}%</Badge>
                          </TableCell>
                          <TableCell className="text-center">
                            <Badge variant="secondary">{product.completion}%</Badge>
                          </TableCell>
                          <TableCell className="text-center">
                            <Badge variant="default">{product.accuracy}%</Badge>
                          </TableCell>
                        </TableRow>
                        {expandedProducts.has(product.id) && product.subdecks.map((subdeck, subIndex) => (
                          <TableRow 
                            key={`${product.id}-${subIndex}`}
                            className="bg-muted/20"
                          >
                            <TableCell className="font-medium pl-12 text-muted-foreground">
                              └─ {subdeck.name}
                            </TableCell>
                            <TableCell className="text-center">
                              <Badge variant="outline">{subdeck.activeStudents}%</Badge>
                            </TableCell>
                            <TableCell className="text-center">
                              <Badge variant="outline">{subdeck.completion}%</Badge>
                            </TableCell>
                            <TableCell className="text-center">
                              <Badge variant="outline">{subdeck.accuracy}%</Badge>
                            </TableCell>
                          </TableRow>
                        ))}
                      </Fragment>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Rankings */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-green-500" />
                    Ranking Maiores Acertos
                  </CardTitle>
                  <CardDescription>Top 5 alunos com melhor desempenho</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {topStudentsRanking.slice(0, 5).map((student, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">
                            {index + 1}
                          </div>
                          <span className="font-medium">{student.name}</span>
                        </div>
                        <Badge className="bg-green-500/10 text-green-500 hover:bg-green-500/20">
                          {student.accuracy}%
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingDown className="h-5 w-5 text-red-500" />
                    Ranking Maiores Erros
                  </CardTitle>
                  <CardDescription>Alunos que precisam de mais atenção</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[...topStudentsRanking].sort((a, b) => b.errors - a.errors).slice(0, 5).map((student, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-destructive/10 text-destructive font-bold">
                            {index + 1}
                          </div>
                          <span className="font-medium">{student.name}</span>
                        </div>
                        <Badge variant="destructive">
                          {student.errors}% erros
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* SESSÕES DE ESTUDO */}
          <TabsContent value="sessions" className="space-y-6">
            <FilterSection />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
              <Card className="lg:col-span-3">
                <CardHeader>
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <Activity className="h-4 w-4 text-primary" />
                    Total Sessões
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary">2.847</div>
                  <p className="text-xs text-muted-foreground mt-1">Período selecionado</p>
                </CardContent>
              </Card>

              <Card className="lg:col-span-3">
                <CardHeader>
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-primary" />
                    Total Flashcards
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary">12.850</div>
                  <p className="text-xs text-muted-foreground mt-1">Período selecionado</p>
                </CardContent>
              </Card>

              <Card className="lg:col-span-3">
                <CardHeader>
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    Tempo Total
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary">1.047h</div>
                  <p className="text-xs text-muted-foreground mt-1">Período selecionado</p>
                </CardContent>
              </Card>

              <Card className="lg:col-span-3">
                <CardHeader>
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    Tempo por Sessão
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary">22min</div>
                  <p className="text-xs text-muted-foreground mt-1">Tempo médio</p>
                </CardContent>
              </Card>

              <Card className="lg:col-span-4">
                <CardHeader>
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-primary" />
                    Flashcards por Sessão
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary">45</div>
                  <p className="text-xs text-muted-foreground mt-1">Média por sessão</p>
                </CardContent>
              </Card>

              <Card className="lg:col-span-4">
                <CardHeader>
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <Award className="h-4 w-4 text-primary" />
                    % Acerto
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary">83%</div>
                  <p className="text-xs text-muted-foreground mt-1">Durante as sessões</p>
                </CardContent>
              </Card>

              <Card className="lg:col-span-4">
                <CardHeader>
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-green-500" />
                    Evolução no Período
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {(() => {
                    const data = getLearningEvolutionData();
                    const evolution = data.length > 1 
                      ? (data[data.length - 1].accuracy - data[0].accuracy).toFixed(1).replace('.', ',')
                      : "0,0";
                    const isPositive = parseFloat(evolution.replace(',', '.')) >= 0;
                    return (
                      <>
                        <div className={cn(
                          "text-3xl font-bold",
                          isPositive ? "text-green-500" : "text-red-500"
                        )}>
                          {isPositive ? "+" : ""}{evolution}%
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">vs início do período</p>
                      </>
                    );
                  })()}
                </CardContent>
              </Card>
            </div>

            {/* Distribuição de Sessões */}
            <Card>
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <CardTitle>Distribuição de Sessões</CardTitle>
                    <CardDescription>
                      {sessionViewType === "hour" && "Quando seus alunos mais estudam"}
                      {sessionViewType === "week" && "Distribuição semanal de estudos"}
                      {sessionViewType === "month" && "Distribuição mensal de estudos"}
                    </CardDescription>
                  </div>
                  <Select value={sessionViewType} onValueChange={(value: "hour" | "week" | "month") => setSessionViewType(value)}>
                    <SelectTrigger className="w-[200px]">
                      <SelectValue placeholder="Visualização" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hour">Por Hora do Dia</SelectItem>
                      <SelectItem value="week">Por Dia da Semana</SelectItem>
                      <SelectItem value="month">Por Dia do Mês</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardHeader>
              <CardContent>
                {sessionViewType === "hour" && (
                  <ResponsiveContainer width="100%" height={400}>
                    <LineChart data={studyMomentsHourly}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="hour" stroke="hsl(var(--muted-foreground))" />
                      <YAxis yAxisId="left" stroke="hsl(var(--primary))" label={{ value: 'Sessões', angle: -90, position: 'insideLeft' }} />
                      <YAxis yAxisId="right" orientation="right" stroke="hsl(142 76% 36%)" label={{ value: 'Tempo (min)', angle: 90, position: 'insideRight' }} />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: "hsl(var(--card))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "8px"
                        }}
                        cursor={false}
                      />
                      <Legend />
                      <Line 
                        yAxisId="left"
                        type="monotone" 
                        dataKey="sessions" 
                        name="Sessões"
                        stroke="hsl(var(--primary))" 
                        strokeWidth={3}
                        dot={{ fill: "hsl(var(--primary))", r: 5 }}
                        activeDot={false}
                      />
                      <Line 
                        yAxisId="right"
                        type="monotone" 
                        dataKey="avgTime" 
                        name="Tempo Médio (min)"
                        stroke="hsl(142 76% 36%)" 
                        strokeWidth={3}
                        dot={{ fill: "hsl(142 76% 36%)", r: 5 }}
                        activeDot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                )}
                {sessionViewType === "week" && (
                  <ResponsiveContainer width="100%" height={400}>
                    <LineChart data={studyMomentsWeekly}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" />
                      <YAxis yAxisId="left" stroke="hsl(var(--primary))" label={{ value: 'Sessões', angle: -90, position: 'insideLeft' }} />
                      <YAxis yAxisId="right" orientation="right" stroke="hsl(142 76% 36%)" label={{ value: 'Tempo (min)', angle: 90, position: 'insideRight' }} />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: "hsl(var(--card))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "8px"
                        }}
                        cursor={false}
                      />
                      <Legend />
                      <Line 
                        yAxisId="left"
                        type="monotone" 
                        dataKey="sessions" 
                        name="Sessões"
                        stroke="hsl(var(--primary))" 
                        strokeWidth={3}
                        dot={{ fill: "hsl(var(--primary))", r: 5 }}
                        activeDot={false}
                      />
                      <Line 
                        yAxisId="right"
                        type="monotone" 
                        dataKey="avgTime" 
                        name="Tempo Médio (min)"
                        stroke="hsl(142 76% 36%)" 
                        strokeWidth={3}
                        dot={{ fill: "hsl(142 76% 36%)", r: 5 }}
                        activeDot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                )}
                {sessionViewType === "month" && (
                  <ResponsiveContainer width="100%" height={400}>
                    <LineChart data={studyMomentsMonthly}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" />
                      <YAxis yAxisId="left" stroke="hsl(var(--primary))" label={{ value: 'Sessões', angle: -90, position: 'insideLeft' }} />
                      <YAxis yAxisId="right" orientation="right" stroke="hsl(142 76% 36%)" label={{ value: 'Tempo (min)', angle: 90, position: 'insideRight' }} />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: "hsl(var(--card))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "8px"
                        }}
                        cursor={false}
                      />
                      <Legend />
                      <Line 
                        yAxisId="left"
                        type="monotone" 
                        dataKey="sessions" 
                        name="Sessões"
                        stroke="hsl(var(--primary))" 
                        strokeWidth={3}
                        dot={{ fill: "hsl(var(--primary))", r: 5 }}
                        activeDot={false}
                      />
                      <Line 
                        yAxisId="right"
                        type="monotone" 
                        dataKey="avgTime" 
                        name="Tempo Médio (min)"
                        stroke="hsl(142 76% 36%)" 
                        strokeWidth={3}
                        dot={{ fill: "hsl(142 76% 36%)", r: 5 }}
                        activeDot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                )}
              </CardContent>
            </Card>

            {/* Evolução da Aprendizagem */}
            <Card>
              <CardHeader>
                <CardTitle>Evolução da Aprendizagem</CardTitle>
                <CardDescription>
                  Progresso diário de acertos {periodFilter === "today" ? "de hoje" : 
                    periodFilter === "week" ? "dos últimos 7 dias" : 
                    periodFilter === "month" ? "dos últimos 30 dias" : 
                    periodFilter === "quarter" ? "dos últimos 90 dias" : 
                    "dos últimos 365 dias"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={getLearningEvolutionData()}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis 
                      dataKey="date" 
                      stroke="hsl(var(--muted-foreground))"
                      tick={{ fontSize: 12 }}
                      interval={Math.max(0, Math.floor(getLearningEvolutionData().length / 15))}
                    />
                    <YAxis 
                      stroke="hsl(var(--muted-foreground))"
                      domain={[0, 100]}
                      label={{ value: '% Acertos', angle: -90, position: 'insideLeft' }}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px"
                      }}
                      cursor={false}
                      labelFormatter={(value, payload) => {
                        if (payload && payload[0]) {
                          return payload[0].payload.fullDate;
                        }
                        return value;
                      }}
                    />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="accuracy" 
                      name="% Acertos"
                      stroke="hsl(142 76% 36%)" 
                      strokeWidth={3}
                      dot={getLearningEvolutionData().length <= 30 ? { fill: "hsl(142 76% 36%)", r: 4 } : false}
                      activeDot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Insights sobre Sessões */}
            <Card>
              <CardHeader>
                <CardTitle>Insights sobre as Sessões</CardTitle>
                <CardDescription>Padrões e tendências identificadas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-green-500/10">
                    <TrendingUp className="h-5 w-5 text-green-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-green-500 mb-1">Pico de Engajamento</h4>
                      <p className="text-sm text-muted-foreground">
                        O horário das 18h apresenta o maior número de sessões (55). Considere lançar 
                        novos conteúdos neste horário para maximizar o alcance.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-lg bg-yellow-500/10">
                    <Clock className="h-5 w-5 text-yellow-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-yellow-500 mb-1">Duração das Sessões</h4>
                      <p className="text-sm text-muted-foreground">
                        Quinta-feira tem sessões 27% mais longas (28min) que a média. Os alunos estão 
                        mais focados no meio da semana.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-lg bg-red-500/10">
                    <TrendingDown className="h-5 w-5 text-red-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-red-500 mb-1">Atenção ao Fim de Semana</h4>
                      <p className="text-sm text-muted-foreground">
                        Sábado e domingo apresentam queda de 30% nas sessões. Crie desafios ou 
                        gamificação para manter o engajamento nos finais de semana.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Performance por Flashcard */}
            <Card>
              <CardHeader>
                <CardTitle>Performance por Flashcard</CardTitle>
                <CardDescription>Total de flashcards estudados no período</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>
                        <button 
                          onClick={() => handleSortFlashcardPerf('name')}
                          className="flex items-center hover:text-primary transition-colors"
                        >
                          Flashcard
                          <SortIcon columnKey="name" config={sortConfigFlashcardPerf} />
                        </button>
                      </TableHead>
                      <TableHead className="text-right">
                        <button 
                          onClick={() => handleSortFlashcardPerf('totalStudied')}
                          className="flex items-center justify-end w-full hover:text-primary transition-colors"
                        >
                          Total Estudados
                          <SortIcon columnKey="totalStudied" config={sortConfigFlashcardPerf} />
                        </button>
                      </TableHead>
                      <TableHead className="text-right">
                        <button 
                          onClick={() => handleSortFlashcardPerf('accuracy')}
                          className="flex items-center justify-end w-full hover:text-primary transition-colors"
                        >
                          % Acerto
                          <SortIcon columnKey="accuracy" config={sortConfigFlashcardPerf} />
                        </button>
                      </TableHead>
                      <TableHead className="text-right">
                        <button 
                          onClick={() => handleSortFlashcardPerf('totalTime')}
                          className="flex items-center justify-end w-full hover:text-primary transition-colors"
                        >
                          Tempo Total
                          <SortIcon columnKey="totalTime" config={sortConfigFlashcardPerf} />
                        </button>
                      </TableHead>
                      <TableHead className="text-right">
                        <button 
                          onClick={() => handleSortFlashcardPerf('avgTime')}
                          className="flex items-center justify-end w-full hover:text-primary transition-colors"
                        >
                          Tempo Médio
                          <SortIcon columnKey="avgTime" config={sortConfigFlashcardPerf} />
                        </button>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {getSortedData(flashcardPerformance, sortConfigFlashcardPerf).map((item) => (
                      <Fragment
                        key={item.id}
                      >
                        <TableRow 
                          className="cursor-pointer hover:bg-muted/50"
                          onClick={() => toggleSessionFlashcard(item.id)}
                        >
                          <TableCell className="font-medium">
                            <div className="flex items-center gap-2">
                              {expandedSessionFlashcards.has(item.id) ? (
                                <ChevronDown className="h-4 w-4 text-muted-foreground" />
                              ) : (
                                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                              )}
                              {item.name}
                              <Badge variant="outline" className="ml-2 text-xs">
                                {item.subdecks.length}
                              </Badge>
                            </div>
                          </TableCell>
                          <TableCell className="text-right">{item.totalStudied.toLocaleString()}</TableCell>
                          <TableCell className="text-right">
                            <Badge variant="secondary">{item.accuracy}%</Badge>
                          </TableCell>
                          <TableCell className="text-right">{item.totalTime}</TableCell>
                          <TableCell className="text-right">{item.avgTime}</TableCell>
                        </TableRow>
                        {expandedSessionFlashcards.has(item.id) && item.subdecks.map((subdeck, subIndex) => (
                          <TableRow 
                            key={`${item.id}-${subIndex}`}
                            className="bg-muted/20"
                          >
                            <TableCell className="font-medium pl-12 text-muted-foreground">
                              └─ {subdeck.name}
                            </TableCell>
                            <TableCell className="text-right text-muted-foreground">
                              {subdeck.totalStudied.toLocaleString()}
                            </TableCell>
                            <TableCell className="text-right">
                              <Badge variant="outline">{subdeck.accuracy}%</Badge>
                            </TableCell>
                            <TableCell className="text-right text-muted-foreground">
                              {subdeck.totalTime}
                            </TableCell>
                            <TableCell className="text-right text-muted-foreground">
                              {subdeck.avgTime}
                            </TableCell>
                          </TableRow>
                        ))}
                      </Fragment>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Ranking Flashcards */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-primary" />
                  Ranking Flashcards
                </CardTitle>
                <CardDescription>Alunos que mais estudaram flashcards no período</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Posição</TableHead>
                      <TableHead>
                        <button 
                          onClick={() => handleSortStudentsFlashcards('name')}
                          className="flex items-center hover:text-primary transition-colors"
                        >
                          Aluno
                          <SortIcon columnKey="name" config={sortConfigStudentsFlashcards} />
                        </button>
                      </TableHead>
                      <TableHead className="text-right">
                        <button 
                          onClick={() => handleSortStudentsFlashcards('flashcards')}
                          className="flex items-center justify-end w-full hover:text-primary transition-colors"
                        >
                          Flashcards
                          <SortIcon columnKey="flashcards" config={sortConfigStudentsFlashcards} />
                        </button>
                      </TableHead>
                      <TableHead className="text-right">
                        <button 
                          onClick={() => handleSortStudentsFlashcards('sessions')}
                          className="flex items-center justify-end w-full hover:text-primary transition-colors"
                        >
                          Sessões
                          <SortIcon columnKey="sessions" config={sortConfigStudentsFlashcards} />
                        </button>
                      </TableHead>
                      <TableHead className="text-right">
                        <button 
                          onClick={() => handleSortStudentsFlashcards('avgTime')}
                          className="flex items-center justify-end w-full hover:text-primary transition-colors"
                        >
                          Tempo Médio
                          <SortIcon columnKey="avgTime" config={sortConfigStudentsFlashcards} />
                        </button>
                      </TableHead>
                      <TableHead className="text-right">
                        <button 
                          onClick={() => handleSortStudentsFlashcards('totalTime')}
                          className="flex items-center justify-end w-full hover:text-primary transition-colors"
                        >
                          Tempo Total
                          <SortIcon columnKey="totalTime" config={sortConfigStudentsFlashcards} />
                        </button>
                      </TableHead>
                      <TableHead className="text-right">
                        <button 
                          onClick={() => handleSortStudentsFlashcards('accuracy')}
                          className="flex items-center justify-end w-full hover:text-primary transition-colors"
                        >
                          % Acerto
                          <SortIcon columnKey="accuracy" config={sortConfigStudentsFlashcards} />
                        </button>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {getSortedData(studentsFlashcardsRanking, sortConfigStudentsFlashcards).map((student, index) => (
                      <TableRow key={student.name}>
                        <TableCell>
                          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">
                            {index + 1}
                          </div>
                        </TableCell>
                        <TableCell className="font-medium">{student.name}</TableCell>
                        <TableCell className="text-right font-semibold text-primary">
                          {student.flashcards}
                        </TableCell>
                        <TableCell className="text-right">{student.sessions}</TableCell>
                        <TableCell className="text-right">{student.avgTime}</TableCell>
                        <TableCell className="text-right">{student.totalTime}</TableCell>
                        <TableCell className="text-right">
                          <Badge variant="secondary">{student.accuracy}%</Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

          </TabsContent>

          {/* USUÁRIOS */}
          <TabsContent value="users" className="space-y-6">
            <FilterSection />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    % Alunos Ativos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary">{metrics.activeStudentsPercentage}%</div>
                  <p className="text-xs text-muted-foreground mt-1">{metrics.activeStudentsCount} de {metrics.totalStudents} usuários</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <Target className="h-4 w-4 text-primary" />
                    % Conclusão
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary">{metrics.avgCompletion}%</div>
                  <p className="text-xs text-muted-foreground mt-1">Taxa média</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <Award className="h-4 w-4 text-primary" />
                    % Acerto
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary">{metrics.avgAccuracy}%</div>
                  <p className="text-xs text-muted-foreground mt-1">Média de acertos</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <Flame className="h-4 w-4 text-orange-500" />
                    Streak Médio
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-orange-500">{metrics.avgStreak}</div>
                  <p className="text-xs text-muted-foreground mt-1">Dias consecutivos</p>
                </CardContent>
              </Card>
            </div>

            {/* Estatísticas Detalhadas dos Usuários */}
            <Card>
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <CardTitle>Estatísticas Detalhadas dos Alunos</CardTitle>
                    <CardDescription>Principais métricas individuais</CardDescription>
                  </div>
                  <Button onClick={exportToExcel} variant="outline" className="whitespace-nowrap">
                    <Download className="mr-2 h-4 w-4" />
                    Exportar para Excel
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>
                        <button 
                          onClick={() => handleSort('name')}
                          className="flex items-center hover:text-primary transition-colors"
                        >
                          Aluno
                          <SortIcon columnKey="name" config={sortConfig} />
                        </button>
                      </TableHead>
                      <TableHead className="text-center">
                        <button 
                          onClick={() => handleSort('active')}
                          className="flex items-center justify-center w-full hover:text-primary transition-colors"
                        >
                          Status
                          <SortIcon columnKey="active" config={sortConfig} />
                        </button>
                      </TableHead>
                      <TableHead className="text-center">
                        <button 
                          onClick={() => handleSort('streak')}
                          className="flex items-center justify-center w-full hover:text-primary transition-colors"
                        >
                          Streak
                          <SortIcon columnKey="streak" config={sortConfig} />
                        </button>
                      </TableHead>
                      <TableHead className="text-center">Flashcards/dia</TableHead>
                      <TableHead className="text-center">
                        <button 
                          onClick={() => handleSort('flashcards')}
                          className="flex items-center justify-center w-full hover:text-primary transition-colors"
                        >
                          Total Flashcards
                          <SortIcon columnKey="flashcards" config={sortConfig} />
                        </button>
                      </TableHead>
                      <TableHead className="text-center">Tempo Total</TableHead>
                      <TableHead className="text-center">Tempo Médio</TableHead>
                      <TableHead className="text-center">Dias Estudo</TableHead>
                      <TableHead className="text-center">
                        <button 
                          onClick={() => handleSort('accuracy')}
                          className="flex items-center justify-center w-full hover:text-primary transition-colors"
                        >
                          % Acerto
                          <SortIcon columnKey="accuracy" config={sortConfig} />
                        </button>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {getPaginatedData(getSortedData(getFilteredStudents(), sortConfig)).map((student, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{student.name}</TableCell>
                        <TableCell className="text-center">
                          {student.active ? (
                            <Badge className="bg-green-500/10 text-green-500">Ativo</Badge>
                          ) : (
                            <Badge variant="secondary">Inativo</Badge>
                          )}
                        </TableCell>
                        <TableCell className="text-center">
                          <span className="inline-flex items-center gap-1">
                            <Flame className="h-4 w-4 text-orange-500" />
                            {student.streak}
                          </span>
                        </TableCell>
                        <TableCell className="text-center">45</TableCell>
                        <TableCell className="text-center">{student.flashcards}</TableCell>
                        <TableCell className="text-center">8h 30min</TableCell>
                        <TableCell className="text-center">22min</TableCell>
                        <TableCell className="text-center">15</TableCell>
                        <TableCell className="text-center">
                          <Badge variant="default">{student.accuracy}%</Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>

                {/* Paginação */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">Itens por página:</span>
                    <Select value={itemsPerPage.toString()} onValueChange={(value) => {
                      setItemsPerPage(Number(value));
                      setCurrentPage(1);
                    }}>
                      <SelectTrigger className="w-[80px] h-9">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="10">10</SelectItem>
                        <SelectItem value="20">20</SelectItem>
                        <SelectItem value="50">50</SelectItem>
                        <SelectItem value="100">100</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">
                      Página {currentPage} de {getTotalPages(getFilteredStudents().length)}
                    </span>
                    <div className="flex gap-1">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-9 w-9"
                        onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                        disabled={currentPage === 1}
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-9 w-9"
                        onClick={() => setCurrentPage(prev => Math.min(getTotalPages(getFilteredStudents().length), prev + 1))}
                        disabled={currentPage === getTotalPages(getFilteredStudents().length)}
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Distribuição de Atividade */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Distribuição por Atividade</CardTitle>
                  <CardDescription>Segmentação dos alunos</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Muito Ativos (15+ dias)</span>
                        <span className="text-sm text-muted-foreground">35 alunos (35%)</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-green-500" style={{ width: "35%" }} />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Ativos (7-14 dias)</span>
                        <span className="text-sm text-muted-foreground">46 alunos (46%)</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary" style={{ width: "46%" }} />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Pouco Ativos (1-6 dias)</span>
                        <span className="text-sm text-muted-foreground">15 alunos (15%)</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-yellow-500" style={{ width: "15%" }} />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Inativos (0 dias)</span>
                        <span className="text-sm text-muted-foreground">4 alunos (4%)</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-red-500" style={{ width: "4%" }} />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recomendações</CardTitle>
                  <CardDescription>Ações sugeridas para melhorar métricas</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-primary/10">
                      <Users className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold text-sm mb-1">Reativar Usuários Inativos</h4>
                        <p className="text-xs text-muted-foreground">
                          23 alunos estão inativos há mais de 7 dias. Envie um lembrete ou ofereça um incentivo.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 rounded-lg bg-green-500/10">
                      <Flame className="h-5 w-5 text-green-500 mt-1" />
                      <div>
                        <h4 className="font-semibold text-sm mb-1">Incentivar Streaks</h4>
                        <p className="text-xs text-muted-foreground">
                          Alunos com streak alto têm 40% mais retenção. Crie desafios de streak.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 rounded-lg bg-orange-500/10">
                      <Target className="h-5 w-5 text-orange-500 mt-1" />
                      <div>
                        <h4 className="font-semibold text-sm mb-1">Melhorar Taxa de Conclusão</h4>
                        <p className="text-xs text-muted-foreground">
                          15% dos alunos não concluem os decks. Considere dividir em módulos menores.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <BackToTop />
    </div>
  );
};

export default Dashboards;
